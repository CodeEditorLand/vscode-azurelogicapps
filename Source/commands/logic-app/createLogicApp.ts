/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {
	AzureTreeDataProvider,
	type BaseEditor,
	type IAzureNode,
	type IAzureParentNode,
} from "vscode-azureextensionui";

export async function createLogicApp(
	tree: AzureTreeDataProvider,
	editor: BaseEditor<IAzureNode>,
	subscription?: IAzureParentNode,
	resourceGroup?: string,
): Promise<string> {
	const node = subscription
		? subscription
		: ((await tree.showNodePicker(
				AzureTreeDataProvider.subscriptionContextValue,
		  )) as IAzureParentNode);

	const logicAppNode = await node.createChild({ resourceGroup });
	await editor.showEditor(logicAppNode);
	return logicAppNode.id;
}
