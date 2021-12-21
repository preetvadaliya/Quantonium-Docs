// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2013-2021 Quantonium, All rights reserved
// Released under the GPL License, Version 3.0

/**
 * Main Documentation generator file.
 * @author preetvadaliya.ict18@gmail.com (Preet Vadaliya)
 */

const fs = require('fs');
const mdTable = require('./MDTable');
const yml = require('json-to-pretty-yaml');
const turnDown = require('turndown');
const turnDownService = new turnDown();

// add new turnDown rule for <sub></sub> tag for more rich markdown
turnDownService.addRule('subText', {
    filter: ['sub'],
    replacement: function (content) {
        return "~" + content + "~";
    }
});

// add new turnDown rule for <sup></sup> tag for more rich markdown
turnDownService.addRule('supText', {
    filter: ['sup'],
    replacement: function (content) {
        return "^" + content + "^";
    }
});

// Read simple_components.json file
const simpleComponents = Array.from(JSON.parse(fs.readFileSync('simple_components.json')));
const componentsYmlPaths = [];
const blockParamsInfo = {};
const finalYmlPaths = {
    "nav": [
        {
            "Home": [
                {"Getting Started": "index.md"}
            ]
        },
        {
            "Components": []
        },
        {
            "Built-In Blocks": [
                {"Control": "blocks/control.md"},
                {"Logic": "blocks/logic.md"},
                {"Math": "blocks/math.md"},
                {"Text": "blocks/text.md"},
                {"Lists": "blocks/lists.md"},
                {"Dictionaries": "blocks/dictionaries.md"},
                {"Colors": "blocks/colors.md"},
                {"Variables": "blocks/variables.md"},
                {"Procedures": "blocks/procedures.md"}
            ]
        }
    ]
}

const ROOT = "docs/components/";
const BLOCK_PARAMS_INFO = "docs/assets/javascripts/blockly/blockParamsInfo.js";
const PATH_SEPARATOR = "/";
const FILE_EXE = ".md";
const HEADING_1 = "# ";
const HEADING_2 = "## ";
const HEADING_3 = "### ";
const HEADING_4 = "#### ";
const NEW_LINE = "\n\n";
const HORIZONTAL_RULE = "---";
const LICENSE = `<!--
  Copyright © 2021-${new Date().getFullYear()} Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->`;

// Create root folder if not present
if (!fs.existsSync(ROOT)) {
    fs.mkdirSync(ROOT);
}

// Main documentation writer
simpleComponents.forEach(component => {
    if (component.categoryString !== "INTERNAL" && (component.showOnPalette === "true" || component.name === "Form")) {
        // Change component name "Form" to "Screen"
        if (component.name === "Form") {
            component.name = "Screen";
        }

        // Create component category's directory
        let dirPath = ROOT + component.categoryString.toLowerCase();
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }

        // Start generating component's docs
        let componentDocs = "";
        componentDocs += LICENSE + NEW_LINE;

        componentDocs += HEADING_1 + component.name + NEW_LINE;
        componentDocs += turnDownService.turndown(component.helpString.replace(/\s+/g, ' ').trim()) + NEW_LINE;
        componentDocs += HORIZONTAL_RULE + NEW_LINE;

        // Component's designer properties docs
        if (component.properties.length > 0) {
            componentDocs += HEADING_2 + "Designer Properties" + NEW_LINE;
            componentDocs += HORIZONTAL_RULE + NEW_LINE;
            Array.from(component.properties).forEach(designerProperty => {
                componentDocs += HEADING_3 + designerProperty.name + NEW_LINE;
                componentDocs += mdTable(
                    [
                        ["Property Name", "Editor Type", "Default Value"],
                        [designerProperty.name, designerProperty.editorType, designerProperty.defaultValue]
                    ],
                    {align: ['l', 'l', 'l']}
                ) + NEW_LINE;
            });
        }

        // Component's events docs
        if (component.events.length > 0) {
            componentDocs += HEADING_2 + "Events" + NEW_LINE;
            componentDocs += HORIZONTAL_RULE + NEW_LINE;
            Array.from(component.events).forEach(event => {
                if (event.deprecated === "false") {
                    let paramString = "";
                    let paramsTable = [["Param Name", "IO Type", "Getter Block", "Setter Block"]];
                    if (event.params.length > 0) {
                        Array.from(event.params).forEach(param => {
                            let paramGetBlock = `<div block-type = "getter" variable-name = ${param.name} id = "param-get-${component.name.toLowerCase()}-${event.name.toLowerCase()}-${param.name.toLowerCase()}"></div>`;
                            let paramSetBlock = `<div block-type = "setter" variable-name = ${param.name} id = "param-set-${component.name.toLowerCase()}-${event.name.toLowerCase()}-${param.name.toLowerCase()}"></div>`;
                            paramsTable.push([param.name, `<span class="${param.type}">${param.type}</span>`, paramGetBlock, paramSetBlock]);
                            paramString += param.name + "-";
                        });
                    }
                    paramString = paramString.slice(0, -1);
                    blockParamsInfo[`${component.name}-${event.name}`] = (paramString === "" ? [] : paramString.split('-'));
                    componentDocs += HEADING_3 + event.name + NEW_LINE;
                    let eventBlockWorkspace = `<div block-type = "component_event" component-selector = "${component.name}" event-selector = "${event.name}" id = "${component.name.toLowerCase()}-${event.name.toLowerCase()}"></div>`;
                    componentDocs += eventBlockWorkspace + NEW_LINE;
                    componentDocs += turnDownService.turndown(event.description.replace(/\s+/g, ' ').trim()) + NEW_LINE;
                    if (event.params.length > 0) {
                        componentDocs += mdTable(paramsTable, {align: ['l', 'l', 'l', 'l']}) + NEW_LINE;
                    }
                }
            });
        }

        // Component's methods docs
        if (component.methods.length > 0) {
            componentDocs += HEADING_2 + "Methods" + NEW_LINE;
            componentDocs += HORIZONTAL_RULE + NEW_LINE;
            Array.from(component.methods).forEach(method => {
                if (method.deprecated === "false") {
                    let paramString = "";
                    let paramsTable = [["Param Name", "Input Type"]];
                    if (method.params.length > 0) {
                        Array.from(method.params).forEach(param => {
                            paramsTable.push([param.name, `<span class="${param.type}">${param.type}</span>`]);
                            paramString += param.name + "-";
                        });
                    }
                    paramString = paramString.slice(0, -1);
                    let tempBlockInfo = {};
                    tempBlockInfo['params'] = (paramString === "" ? [] : paramString.split('-'));
                    tempBlockInfo['isVoid'] = (method.returnType === undefined);
                    blockParamsInfo[`${component.name}-${method.name}`] = tempBlockInfo;
                    componentDocs += HEADING_3 + method.name + NEW_LINE;
                    let methodBlockWorkspace = `<div block-type = "component_method" component-selector = "${component.name}" method-selector = "${method.name}" id = "${component.name.toLowerCase()}-${method.name.toLowerCase()}"></div>`;
                    componentDocs += methodBlockWorkspace + NEW_LINE;
                    componentDocs += "Return Type : " + (method.returnType === undefined ? `<span class="void">void</span>` : `<span class="${method.returnType}">${method.returnType}</span>`) + NEW_LINE;
                    componentDocs += turnDownService.turndown(method.description.replace(/\s+/g, ' ').trim()) + NEW_LINE;
                    if (method.params.length > 0) {
                        componentDocs += mdTable(paramsTable, {align: ['l', 'l']}) + NEW_LINE;
                    }
                }
            });
        }

        if (component.blockProperties.length > 0) {
            componentDocs += HEADING_2 + "Block Properties" + NEW_LINE;
            componentDocs += HORIZONTAL_RULE + NEW_LINE;
            Array.from(component.blockProperties).forEach(blockProperty => {
                    if (blockProperty.deprecated === "false" && blockProperty.rw !== "invisible") {
                        componentDocs += HEADING_3 + blockProperty.name + NEW_LINE;
                        if (blockProperty.rw.includes("read")) {
                            let propertyGetBlockWorkspace = `<div block-type = "component_set_get" component-selector = "${component.name}" property-selector = "${blockProperty.name}" property-type = "get" id = "get-${component.name.toLowerCase()}-${blockProperty.name.toLowerCase()}"></div>`;
                            componentDocs += propertyGetBlockWorkspace + NEW_LINE;
                        }
                        if (blockProperty.rw.includes("write")) {
                            let propertySetBlockWorkspace = `<div block-type = "component_set_get" component-selector = "${component.name}" property-selector = "${blockProperty.name}" property-type = "set" id = "set-${component.name.toLowerCase()}-${blockProperty.name.toLowerCase()}"></div>`;
                            componentDocs += propertySetBlockWorkspace + NEW_LINE;
                        }
                        componentDocs += turnDownService.turndown(blockProperty.description.replace(/\s+/g, ' ').trim()) + NEW_LINE;
                        componentDocs += mdTable(
                            [
                                ["Param Name", "IO Type"],
                                [blockProperty.name, `<span class="${blockProperty.type}">${blockProperty.type}</span>`]
                            ],
                            {align: ['l', 'l']}
                        ) + NEW_LINE;

                        if ('helper' in blockProperty) {
                            let helpers = blockProperty.helper.data.options || [];
                            if (helpers.length > 0) {
                                componentDocs += HEADING_3 + blockProperty.name + " Options" + NEW_LINE;
                                let helperTable = [["Name", "Description", "Block"]];
                                Array.from(helpers).forEach(option => {
                                    if (option['deprecated'] === 'false') {
                                        let name = option.name;
                                        let block = `<div block-type = "helper" helper-name = "${blockProperty.helper.data.key + " " + option.name}" id = "helper-${component.name.toLowerCase()}-${blockProperty.name.toLowerCase()}-${option.name.toLowerCase()}"></div>`;
                                        let description = option['description'];
                                        helperTable.push([name, description, block]);
                                    }
                                });
                                componentDocs += mdTable(helperTable, {align: ['l', 'l', 'l']}) + NEW_LINE;
                            }
                        }
                    }
                }
            );
        }

        componentDocs += HEADING_2 + "Component" + NEW_LINE;
        componentDocs += HORIZONTAL_RULE + NEW_LINE;
        componentDocs += HEADING_3 + component.name + NEW_LINE;
        let componentBlockWorkspace = `<div block-type = "component_component_block" component-selector = "${component.name}" id = "component-${component.name.toLowerCase()}"></div>`;
        componentDocs += componentBlockWorkspace + NEW_LINE;
        componentDocs += "Component " + component.name + "." + NEW_LINE;
        componentDocs += `Return Type : <span class="component">component</span>` + NEW_LINE;

        // Write component docs file
        let filePath = dirPath + PATH_SEPARATOR + component.name.toLowerCase() + FILE_EXE;
        fs.writeFileSync(filePath, componentDocs);
    }
});

const CATEGORIES = {
    'USERINTERFACE': 'User Interface',
    'LAYOUT': "Layout",
    'MEDIA': "Media",
    'ANIMATION': "Drawing and Animation",
    'MAPS': "Maps",
    'SENSORS': "Sensors",
    'SOCIAL': "Social",
    'STORAGE': "Storage",
    'CONNECTIVITY': "Connectivity",
    'LEGOMINDSTORMS': "LEGO® MINDSTORMS®",
    'EXPERIMENTAL': "Experimental"
}

Object.keys(CATEGORIES).forEach(category => {
    let categoryComponentPaths = {};
    let componentPaths = [];
    simpleComponents.forEach(component => {
        if (component.categoryString === category) {
            let tempFilePath = {};
            tempFilePath[component.name] = "components/" + category.toLowerCase() + "/" + component.name.toLowerCase() + FILE_EXE;
            componentPaths.push(tempFilePath);
        }
    });
    categoryComponentPaths[CATEGORIES[category]] = componentPaths;
    componentsYmlPaths.push(categoryComponentPaths);
});

// Update component's yml path
finalYmlPaths.nav[1].Components = componentsYmlPaths;

// Write component block's param info
fs.writeFileSync(BLOCK_PARAMS_INFO, `const BLOCK_PARAMS_INFO = ${JSON.stringify(blockParamsInfo)}`);

function findIndex(line) {
    if (line.startsWith("# Path")) {
        return true
    }
}

// const configFile = fs.readFileSync("mkdocs.yml").toString().split("\n").slice(0, 95);
// configFile.splice(96, 0, yml.stringify(finalYmlPaths));
// fs.writeFileSync("mkdocs.yml", configFile.join("\n"));