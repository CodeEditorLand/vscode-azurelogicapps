/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import type * as vscode from "vscode";
import type { IAzureUserInput } from "vscode-azureextensionui";
import type TelemetryReporter from "vscode-extension-telemetry";

export namespace ext {
	export let context: vscode.ExtensionContext;
	export let outputChannel: vscode.OutputChannel;
	export let reporter: TelemetryReporter | undefined;
	export let ui: IAzureUserInput;
}
