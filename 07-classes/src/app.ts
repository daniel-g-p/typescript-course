abstract class NikeStore {
  public id: number;
  public location: string;
  public employees: string[];

  constructor(id: number, location: string, employees: string[]) {
    this.id = id;
    this.employees = employees.filter((e) => e);
    this.location = location;
  }

  abstract info(): void;

  employeeCount(): number {
    return this.employees.length;
  }
}

enum Department {
  APPAREL = "Apparel",
  FOOTWEAR = "Footwear",
  EQUIPMENT = "Equipment",
}

enum Gender {
  MENS = "Mens",
  WOMENS = "Womens",
  KIDS = "Kids",
}

class Promotion {
  public department: Department;
  public gender: Gender;
  public discount;

  constructor(department: Department, gender: Gender, discount: number) {
    this.department = department;
    this.gender = gender;
    this.discount = discount > 0 && discount <= 100 ? discount : 0;
  }

  advertise(): void {
    const message = `${this.discount}% off ${this.gender} ${this.department}!`;
    console.log(message);
  }
}

class NikeFactoryStore extends NikeStore {
  public promotions: Promotion[] = [];

  constructor(id: number, location: string, employees: string[]) {
    super(id, location, employees);
  }

  info(): void {
    console.log(`Nike Store ${this.location} ${this.id}`);
  }

  addPromotion(promotion: Promotion) {
    const existingPromotion = this.promotions.find((p) => {
      return p.department === promotion.department &&
        p.gender === promotion.gender
        ? true
        : false;
    });
    if (!existingPromotion) {
      this.promotions.push(promotion);
      console.log(
        `Promotion added (${promotion.gender} ${promotion.department})`
      );
    } else {
      existingPromotion.discount = promotion.discount;
      console.log(
        `Promotion updated (${promotion.gender} ${promotion.department})`
      );
    }
  }

  removePromotion(department: Department, gender: Gender) {
    this.promotions = this.promotions.filter((p) => {
      return p.department !== department || p.gender !== gender;
    });
    console.log(`Promotion removed (${gender} ${department})`);
  }

  advertisePromotions(): void {
    for (const promotion of this.promotions) {
      promotion.advertise();
    }
  }
}

const factoryStore = new NikeFactoryStore(912, "Metzingen", ["602484"]);

factoryStore.addPromotion(new Promotion(Department.APPAREL, Gender.KIDS, 30));
factoryStore.addPromotion(new Promotion(Department.FOOTWEAR, Gender.MENS, 30));
factoryStore.addPromotion(
  new Promotion(Department.FOOTWEAR, Gender.WOMENS, 30)
);
factoryStore.removePromotion(Department.APPAREL, Gender.KIDS);

factoryStore.info();
factoryStore.advertisePromotions();
