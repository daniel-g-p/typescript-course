"use strict";
class NikeStore {
    constructor(id, location, employees) {
        this.id = id;
        this.employees = employees.filter((e) => e);
        this.location = location;
    }
    employeeCount() {
        return this.employees.length;
    }
}
var Department;
(function (Department) {
    Department["APPAREL"] = "Apparel";
    Department["FOOTWEAR"] = "Footwear";
    Department["EQUIPMENT"] = "Equipment";
})(Department || (Department = {}));
var Gender;
(function (Gender) {
    Gender["MENS"] = "Mens";
    Gender["WOMENS"] = "Womens";
    Gender["KIDS"] = "Kids";
})(Gender || (Gender = {}));
class Promotion {
    constructor(department, gender, discount) {
        this.department = department;
        this.gender = gender;
        this.discount = discount > 0 && discount <= 100 ? discount : 0;
    }
    advertise() {
        const message = `${this.discount}% off ${this.gender} ${this.department}!`;
        console.log(message);
    }
}
class NikeFactoryStore extends NikeStore {
    constructor(id, location, employees) {
        super(id, location, employees);
        this.promotions = [];
    }
    info() {
        console.log(`Nike Store ${this.location} ${this.id}`);
    }
    addPromotion(promotion) {
        const existingPromotion = this.promotions.find((p) => {
            return p.department === promotion.department &&
                p.gender === promotion.gender
                ? true
                : false;
        });
        if (!existingPromotion) {
            this.promotions.push(promotion);
            console.log(`Promotion added (${promotion.gender} ${promotion.department})`);
        }
        else {
            existingPromotion.discount = promotion.discount;
            console.log(`Promotion updated (${promotion.gender} ${promotion.department})`);
        }
    }
    removePromotion(department, gender) {
        this.promotions = this.promotions.filter((p) => {
            return p.department !== department || p.gender !== gender;
        });
        console.log(`Promotion removed (${gender} ${department})`);
    }
    advertisePromotions() {
        for (const promotion of this.promotions) {
            promotion.advertise();
        }
    }
}
const factoryStore = new NikeFactoryStore(912, "Metzingen", ["602484"]);
factoryStore.addPromotion(new Promotion(Department.APPAREL, Gender.KIDS, 30));
factoryStore.addPromotion(new Promotion(Department.FOOTWEAR, Gender.MENS, 30));
factoryStore.addPromotion(new Promotion(Department.FOOTWEAR, Gender.WOMENS, 30));
factoryStore.removePromotion(Department.APPAREL, Gender.KIDS);
factoryStore.info();
factoryStore.advertisePromotions();
//# sourceMappingURL=app.js.map