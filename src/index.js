import 'phaser';
import Config from './Config/config';
import BootScene from './Scenes/BootScene';
import TitleScene from './Scenes/TitleScene';
import UserInterfaceScene from './Scenes/UserInterfaceScene';
import PreloaderScene from './Scenes/PreloaderScene';
import CharacterSelectScene from './Scenes/CharacterSelectScene';
import OfficeScene from './Scenes/OfficeScene';
import OfficeKeypadScene from './Scenes/OfficeKeypadScene';
import OfficeFilesScene from './Scenes/OfficeFilesScene';
import OfficeComputerScene from './Scenes/OfficeComputerScene';
import OfficeDialogScene from './Scenes/OfficeDialogScene';
import OfficeBrowserScene from './Scenes/OfficeBrowserScene';
import OfficeRolodexScene from './Scenes/OfficeRolodexScene';
import OfficePhoneScene from './Scenes/OfficePhoneScene';
import OfficeFormScene from './Scenes/OfficeFormScene';
import ShoppingScene from './Scenes/ShoppingScene';
import CalculateScene from './Scenes/CalculateScene';
import MailboxScene from './Scenes/MailboxScene';
import FranceRegionsScene from './Scenes/FranceRegionsScene';
import CultureScene from './Scenes/CultureScene';
import CampusScene from './Scenes/CampusScene';
import CongratulationsScene from './Scenes/CongratulationsScene';
import FormScene from './Scenes/FormScene';

class Game extends Phaser.Game {
  constructor () {
    super(Config);
    this.scene.add(Config.scenes.Boot, BootScene);
    this.scene.add(Config.scenes.Preloader, PreloaderScene);
    this.scene.add(Config.scenes.Title, TitleScene);
    this.scene.add(Config.scenes.UserInterface, UserInterfaceScene);
    this.scene.add(Config.scenes.CharacterSelect, CharacterSelectScene);
    this.scene.add(Config.scenes.Office, OfficeScene);
    this.scene.add(Config.scenes.OfficeKeypad, OfficeKeypadScene);
    this.scene.add(Config.scenes.OfficeFiles, OfficeFilesScene);
    this.scene.add(Config.scenes.OfficeComputer, OfficeComputerScene);
    this.scene.add(Config.scenes.OfficeDialog, OfficeDialogScene);
    this.scene.add(Config.scenes.OfficeBrowser, OfficeBrowserScene);
    this.scene.add(Config.scenes.OfficeRolodex, OfficeRolodexScene);
    this.scene.add(Config.scenes.OfficePhone, OfficePhoneScene);
    this.scene.add(Config.scenes.OfficeForm, OfficeFormScene);
    this.scene.add(Config.scenes.Shopping, ShoppingScene);
    this.scene.add(Config.scenes.Calculate, CalculateScene);
    this.scene.add(Config.scenes.Mailbox, MailboxScene);
    this.scene.add(Config.scenes.FranceRegions, FranceRegionsScene);
    this.scene.add(Config.scenes.Culture, CultureScene);
    this.scene.add(Config.scenes.Campus, CampusScene);
    this.scene.add(Config.scenes.Congratulations, CongratulationsScene);
    this.scene.add(Config.scenes.Form, FormScene);

    this.scene.start(Config.scenes.Boot);
  }
}

window.game = new Game();

window.WebFontConfig = {
  google: { families: ["Lato:500", "Shadows Into Light:400"] }
};
(function () {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();