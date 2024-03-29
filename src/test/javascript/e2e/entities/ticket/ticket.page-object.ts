import { element, by, ElementFinder } from 'protractor';

export class TicketComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-ticket div table .btn-danger'));
  title = element.all(by.css('jhi-ticket div h2#page-heading span')).first();

  async clickOnCreateButton(timeout?: number) {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(timeout?: number) {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons() {
    return this.deleteButtons.count();
  }

  async getTitle() {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class TicketUpdatePage {
  pageTitle = element(by.id('jhi-ticket-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  titleInput = element(by.id('field_title'));
  descriptionInput = element(by.id('field_description'));
  dueDateInput = element(by.id('field_dueDate'));
  doneInput = element(by.id('field_done'));
  statusInput = element(by.id('field_status'));
  txtInput = element(by.id('field_txt'));
  projectSelect = element(by.id('field_project'));
  assignedToSelect = element(by.id('field_assignedTo'));
  labelSelect = element(by.id('field_label'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setTitleInput(title) {
    await this.titleInput.sendKeys(title);
  }

  async getTitleInput() {
    return await this.titleInput.getAttribute('value');
  }

  async setDescriptionInput(description) {
    await this.descriptionInput.sendKeys(description);
  }

  async getDescriptionInput() {
    return await this.descriptionInput.getAttribute('value');
  }

  async setDueDateInput(dueDate) {
    await this.dueDateInput.sendKeys(dueDate);
  }

  async getDueDateInput() {
    return await this.dueDateInput.getAttribute('value');
  }

  getDoneInput(timeout?: number) {
    return this.doneInput;
  }
  getStatusInput(timeout?: number) {
    return this.statusInput;
  }
  async setTxtInput(txt) {
    await this.txtInput.sendKeys(txt);
  }

  async getTxtInput() {
    return await this.txtInput.getAttribute('value');
  }

  async projectSelectLastOption(timeout?: number) {
    await this.projectSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async projectSelectOption(option) {
    await this.projectSelect.sendKeys(option);
  }

  getProjectSelect(): ElementFinder {
    return this.projectSelect;
  }

  async getProjectSelectedOption() {
    return await this.projectSelect.element(by.css('option:checked')).getText();
  }

  async assignedToSelectLastOption(timeout?: number) {
    await this.assignedToSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async assignedToSelectOption(option) {
    await this.assignedToSelect.sendKeys(option);
  }

  getAssignedToSelect(): ElementFinder {
    return this.assignedToSelect;
  }

  async getAssignedToSelectedOption() {
    return await this.assignedToSelect.element(by.css('option:checked')).getText();
  }

  async labelSelectLastOption(timeout?: number) {
    await this.labelSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async labelSelectOption(option) {
    await this.labelSelect.sendKeys(option);
  }

  getLabelSelect(): ElementFinder {
    return this.labelSelect;
  }

  async getLabelSelectedOption() {
    return await this.labelSelect.element(by.css('option:checked')).getText();
  }

  async save(timeout?: number) {
    await this.saveButton.click();
  }

  async cancel(timeout?: number) {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class TicketDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-ticket-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-ticket'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
