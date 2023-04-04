/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const elements = [
    {
      name: "Fire",
      picture:
        "https://global-uploads.webflow.com/5ff36780a108495c598ce192/5ff36780a1084939898ce2ce_Incindiary.svg",
    },
    {
      name: "Shock",
      picture:
        "https://global-uploads.webflow.com/5ff36780a108495c598ce192/5ff36780a108495e258ce2cc_Shock.svg",
    },
    {
      name: "Corrosive",
      picture:
        "https://global-uploads.webflow.com/5ff36780a108495c598ce192/6234621bd868059ed12368de_Corrosive.svg",
    },
    {
      name: "Slag",
      picture:
        "https://global-uploads.webflow.com/5ff36780a108495c598ce192/6031690bc9a9b65004a338b1_Slag.svg",
    },
    {
      name: "Explosive",
      picture:
        "https://global-uploads.webflow.com/5ff36780a108495c598ce192/5ff36780a1084982ae8ce2c2_Explosive.svg",
    },
    {
      name: "Non Elemental",
      picture:
        "https://global-uploads.webflow.com/5ff36780a108495c598ce192/5ff36780a10849e5448ce2ca_Nonelemental.svg",
    },
  ];
  const createElements = elements.map((element) => {
    return prisma.element.upsert({
      where: {
        name: element.name,
      },
      create: element,
      update: {},
    });
  });
  const elementCombinations = [
    { name: "Corrosive", Elements: { connect: [{ name: "Corrosive" }] } },
    { name: "Explosive", Elements: { connect: [{ name: "Explosive" }] } },
    { name: "Fire", Elements: { connect: [{ name: "Fire" }] } },
    {
      name: "Non Elemental",
      Elements: { connect: [{ name: "Non Elemental" }] },
    },
    { name: "Shock", Elements: { connect: [{ name: "Shock" }] } },
    { name: "Slag", Elements: { connect: [{ name: "Slag" }] } },
    {
      name: "Fire, Shock, Corrosive, Slag",
      Elements: {
        connect: [
          { name: "Fire" },
          { name: "Shock" },
          { name: "Corrosive" },
          { name: "Slag" },
        ],
      },
    },
    {
      name: "Fire, Shock, Corrosive, Slag, Explosive",
      Elements: {
        connect: [
          { name: "Fire" },
          { name: "Shock" },
          { name: "Corrosive" },
          { name: "Slag" },
          { name: "Explosive" },
        ],
      },
    },
    {
      name: "Non Elemental, Fire, Shock, Corrosive",
      Elements: {
        connect: [
          { name: "Non Elemental" },
          { name: "Fire" },
          { name: "Shock" },
          { name: "Corrosive" },
        ],
      },
    },
    {
      name: "Non Elemental, Fire, Shock, Corrosive, Slag",
      Elements: {
        connect: [
          { name: "Non Elemental" },
          { name: "Fire" },
          { name: "Shock" },
          { name: "Corrosive" },
          { name: "Slag" },
        ],
      },
    },
  ];
  const createElementCombinations = elementCombinations.map((element) => {
    return prisma.elementCombination.upsert({
      where: {
        name: element.name,
      },
      create: element,
      update: {},
    });
  });
  const manufacturers = [
    "Bandit",
    "DAHL",
    "Hyperion",
    "Jakobs",
    "Maliwan",
    "Tediore",
    "Torgue",
    "Vladof",
  ];
  const createManufacturers = manufacturers.map((manufacturer) => {
    return prisma.manufacturer.upsert({
      where: {
        name: manufacturer,
      },
      create: {
        name: manufacturer,
      },
      update: {},
    });
  });
  const weaponTypes = [
    "Assault Rifle",
    "Launcher",
    "Pistol",
    "Shotgun",
    "SMG",
    "Sniper Rifle",
  ];
  const createWeaponTypes = weaponTypes.map((type) => {
    return prisma.weaponType.upsert({
      where: {
        name: type,
      },
      create: {
        name: type,
      },
      update: {},
    });
  });
  const rarity = [
    "White",
    "Green",
    "Blue",
    "Purple",
    "ETech",
    "Legendary",
    "Seraph",
    "Pearlescent",
    "Effervescent",
  ];
  const createRarities = rarity.map((rarityName) => {
    return prisma.rarity.upsert({
      where: {
        name: rarityName,
      },
      create: {
        name: rarityName,
      },
      update: {},
    });
  });
  const sourcesType = [
    { name: "Raid Boss" },
    { name: "Named Enemy" },
    { name: "Boss" },
    { name: "Shop" },
    { name: "Quest" },
  ];
  const createSourcesType = sourcesType.map((sourceType) => {
    return prisma.sourceType.upsert({
      where: {
        name: sourceType.name,
      },
      create: sourceType,
      update: {},
    });
  });
  const content = [
    "Base Game",
    "Big Game Hunt",
    "Campaign of Carnage",
    "Digistruct Peak",
    "Assault on Dragon Keep",
    "Fight For Sanctuary",
    "Pirate's Booty",
    "Slaughterdome",
    "Upgrade Pack #1",
  ];
  const createContent = content.map((name) => {
    return prisma.content.upsert({
      where: { name: name },
      create: { name: name },
      update: {},
    });
  });
  const sources = [
    {
      name: "Hyperius",
      description: `Hyperius the Invincible can be encountered after completing the main story of the "Captain Scarlett and Her Pirate's Booty" DLC. Required Quest: "Hyperius the Invincible" (found in Oasis)`,
      picture:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/603435244288470f681dd96f_Hyperius.jpg",
      SourceType: { connect: { name: "Raid Boss" } },
      Content: { connect: { name: "Pirate's Booty" } },
      Location: {},
    },
    {
      name: "Seraph Vendor",
      description: `Seraph Vendors sell gear in exchange for Seraph Crystals.Seraph Crystals are dropped from Seraph Guardians (DLC Invincible Bosses).If the desired item is not for sale reload and try again.`,
      picture:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/6034c74ba1739e0bcf4c9f44_Seraph-Vendor-Oasis-p-800.jpeg",
      SourceType: { connect: { name: "Shop" } },
      Content: { connect: { name: "Pirate's Booty" } },
      Location: {},
    },
  ];
  const createSources = sources.map((source) => {
    return prisma.source.upsert({
      where: {
        name: source.name,
      },
      create: source,
      update: {},
    });
  });
  const locations = [
    {
      name: "Washburne Refinery",
      picture:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/601f17ef4267b53f560d2ff1_Washburne-Refinery.jpg",
      map: "https://global-uploads.webflow.com/5ff36780a1084987868ce198/61843cc40a93fd030a8dfd37_Washburne%20Refinery.png",
      Content: { connect: { name: "Pirate's Booty" } },
      Sources: { connect: { name: "Hyperius" } },
    },
    {
      name: "Oasis",
      picture:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/601f17ef4267b53f560d2ff1_Washburne-Refinery.jpg",
      map: "https://global-uploads.webflow.com/5ff36780a1084987868ce198/61843cc40a93fd030a8dfd37_Washburne%20Refinery.png",
      Content: { connect: { name: "Pirate's Booty" } },
      Sources: { connect: { name: "Seraph Vendor" } },
    },
  ];
  const createLocations = locations.map((location) => {
    return prisma.location.upsert({
      where: {
        name: location.name,
      },
      create: location,
      update: {},
    });
  });
  const weapons = [
    {
      name: "Actualizer",
      description: "Slower bullet speed.",
      Rarity: { connect: { name: "Seraph" } },
      flavorText: "We need to talk about your DPS report.",
      Type: { connect: { name: "SMG" } },
      Manufacturer: { connect: { name: "Hyperion" } },
      ElementCombination: {
        connect: { name: "Non Elemental, Fire, Shock, Corrosive, Slag" },
      },
      Content: { connect: { name: "Pirate's Booty" } },
      Sources: { connect: [{ name: "Hyperius" }, { name: "Seraph Vendor" }] },
      DropChances: {},
      picture:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/5ff36780a10849738e8d0168_Actualizer-BL2.png",
      picture2:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/5ff36780a108495c648cfebb_Actualizer-BL2.png",
    },
  ];
  const createWeapons = weapons.map((weapon) => {
    return prisma.weapon.upsert({
      where: {
        name: weapon.name,
      },
      create: weapon,
      update: {},
    });
  });
  const dropChances = [
    {
      chance: 0.29,
      Source: { connect: { name: "Hyperius" } },
      Weapon: { connect: { name: "Actualizer" } },
    },
    {
      chance: 120,
      Source: { connect: { name: "Seraph Vendor" } },
      Weapon: { connect: { name: "Actualizer" } },
    },
  ];
  const createDropChances = dropChances.map((dropChance, i) => {
    return prisma.dropChance.upsert({
      where: {
        weaponName_sourceName: {
          weaponName: dropChance.Weapon.connect.name,
          sourceName: dropChance.Source.connect.name,
        },
      },
      create: dropChance,
      update: {},
    });
  });
  await Promise.all(createElements);
  await Promise.all(createElementCombinations);
  await Promise.all(createManufacturers);
  await Promise.all(createWeaponTypes);
  await Promise.all(createRarities);
  await Promise.all(createContent);
  await Promise.all(createSourcesType);
  await Promise.all(createSources);
  await Promise.all(createLocations);
  await Promise.all(createWeapons);
  await Promise.all(createDropChances);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
