/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { AzureWizardPromptStep } from "vscode-azureextensionui";
import { IAgreementWizardContext } from "./createAgreementWizard";
import { IdentityStep } from "./identityStep";

export class GuestIdentityStep extends AzureWizardPromptStep<IAgreementWizardContext> {
	public async prompt(
		wizardContext: IAgreementWizardContext
	): Promise<IAgreementWizardContext> {
		const identityStep = new IdentityStep();
		await identityStep
			.prompt(wizardContext, wizardContext.guestPartner!)
			.then((result) => {
				wizardContext.guestIdentity = result;
			});

		return wizardContext;
	}
}
