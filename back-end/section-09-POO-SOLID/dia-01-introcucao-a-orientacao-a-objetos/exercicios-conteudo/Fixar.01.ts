// Criar classe chamada TV

class TV {
  private _brand: string;
  private _size: number;
  private _resolutions: string;
  private _connections: string;
  private _connectedTo?: string;

  constructor( brand: string, size: number, resolutions: string, connections: string) {
    this._brand = brand;
    this._size = size;
    this._resolutions = resolutions,
    this._connections = connections;
  }

  setConnectedTo(connection: string) {
    if (this._connections.includes(connection)) {
      this._connectedTo = connection;
      console.log(`Conectado a ${this._connectedTo}`);
    } else {
      console.log('Sorry, connection unavailable');
    }
  }

  turnOn() {
    console.log(`Ligando TV ${this._brand}, ${this._size} polegadas, ${this._resolutions} e conexões ${this._connections}`)
  }
}

const tvLG = new TV('LG', 42, '1080p', 'HDMI, Ethernet, USB');
const tvSamsung = new TV('Samsung', 32, '4K', 'HDMI, DisplayPort, USB');

tvLG.turnOn();
tvSamsung.turnOn();
tvLG.setConnectedTo('DisplayPort');
tvSamsung.setConnectedTo('DisplayPort');