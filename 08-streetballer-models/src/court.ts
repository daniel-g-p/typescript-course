import id from "./id";

enum CourtAccess {
  PUBLIC = "Public",
  PRIVATE = "Private",
  UNKNOWN = "Unknown",
}

enum CourtType {
  OUTDOOR = "Outdoor",
  INDOOR = "Indoor",
  UNKNOWN = "Unknown",
}

interface Coordinates {
  type: "Point";
  coordinates: [number, number];
}

interface CourtInterface {
  _id?: string;
  name?: string;
  address?: string;
  location?: Coordinates;
  baskets?: number;
  access?: CourtAccess;
  type?: CourtType;
  email?: string;
  phone?: string;
  topPlayers?: string[];
  topSquads?: string[];
}

class Court implements CourtInterface {
  public _id: string;
  public name: string;
  public address: string;
  public location: Coordinates;
  public baskets: number;
  public access: CourtAccess;
  public type: CourtType;
  public email: string;
  public phone: string;
  public topPlayers: string[];
  public topSquads: string[];

  constructor(
    _id: string = "",
    name: string = "",
    address: string = "",
    longitude: number = 0,
    latitude: number = 0,
    baskets: number = 2,
    access: CourtAccess = CourtAccess.UNKNOWN,
    type: CourtType = CourtType.UNKNOWN,
    phone: string = "",
    email: string = ""
  ) {
    this._id = _id.length > 0 ? _id : id();
    this.name = name.trim();
    this.address = address.trim();
    this.location =
      longitude >= -180 && longitude <= 180 && latitude >= -90 && latitude <= 90
        ? { type: "Point", coordinates: [longitude, latitude] }
        : { type: "Point", coordinates: [0, 0] };
    this.baskets = baskets > 0 && baskets % 1 === 0 ? baskets : 2;
    this.access = access;
    this.type = type;
    this.phone = phone;
    this.email = email;
    this.topPlayers = [];
    this.topSquads = [];
  }

  data(fields: string[] = []): CourtInterface {
    const data: { [key: string]: any } = {
      _id: this._id,
      name: this.name,
      address: this.address,
      location: this.location,
      baskets: this.baskets,
      access: this.access,
      type: this.type,
      phone: this.phone,
      email: this.email,
      topPlayers: this.topPlayers,
      topSquads: this.topSquads,
    };
    if (fields.length > 0) {
      for (const key of Object.keys(data)) {
        const include = key === "_id" || fields.includes(key);
        if (!include) {
          delete data[key];
        }
      }
    }
    return data as CourtInterface;
  }
}

const court = new Court();

console.log(court.data());
