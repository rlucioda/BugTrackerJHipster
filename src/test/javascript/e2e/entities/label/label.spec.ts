// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LabelComponentsPage, LabelDeleteDialog, LabelUpdatePage } from './label.page-object';

const expect = chai.expect;

describe('Label e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let labelComponentsPage: LabelComponentsPage;
  let labelUpdatePage: LabelUpdatePage;
  let labelDeleteDialog: LabelDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Labels', async () => {
    await navBarPage.goToEntity('label');
    labelComponentsPage = new LabelComponentsPage();
    await browser.wait(ec.visibilityOf(labelComponentsPage.title), 5000);
    expect(await labelComponentsPage.getTitle()).to.eq('bugTrackerJHipsterApp.label.home.title');
  });

  it('should load create Label page', async () => {
    await labelComponentsPage.clickOnCreateButton();
    labelUpdatePage = new LabelUpdatePage();
    expect(await labelUpdatePage.getPageTitle()).to.eq('bugTrackerJHipsterApp.label.home.createOrEditLabel');
    await labelUpdatePage.cancel();
  });

  it('should create and save Labels', async () => {
    const nbButtonsBeforeCreate = await labelComponentsPage.countDeleteButtons();

    await labelComponentsPage.clickOnCreateButton();
    await promise.all([labelUpdatePage.setLabelInput('label'), labelUpdatePage.setTxtInput('txt')]);
    expect(await labelUpdatePage.getLabelInput()).to.eq('label', 'Expected Label value to be equals to label');
    const selectedStatus = labelUpdatePage.getStatusInput();
    if (await selectedStatus.isSelected()) {
      await labelUpdatePage.getStatusInput().click();
      expect(await labelUpdatePage.getStatusInput().isSelected(), 'Expected status not to be selected').to.be.false;
    } else {
      await labelUpdatePage.getStatusInput().click();
      expect(await labelUpdatePage.getStatusInput().isSelected(), 'Expected status to be selected').to.be.true;
    }
    expect(await labelUpdatePage.getTxtInput()).to.eq('txt', 'Expected Txt value to be equals to txt');
    await labelUpdatePage.save();
    expect(await labelUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await labelComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Label', async () => {
    const nbButtonsBeforeDelete = await labelComponentsPage.countDeleteButtons();
    await labelComponentsPage.clickOnLastDeleteButton();

    labelDeleteDialog = new LabelDeleteDialog();
    expect(await labelDeleteDialog.getDialogTitle()).to.eq('bugTrackerJHipsterApp.label.delete.question');
    await labelDeleteDialog.clickOnConfirmButton();

    expect(await labelComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
