/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Content,
  Manufacturer,
  PrismaClient,
  Rarity,
  SourceType,
  WeaponType,
} from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const elements = [
    {
      name: "Fire",
      image:
        "https://global-uploads.webflow.com/5ff36780a108495c598ce192/5ff36780a1084939898ce2ce_Incindiary.svg",
    },
    {
      name: "Shock",
      image:
        "https://global-uploads.webflow.com/5ff36780a108495c598ce192/5ff36780a108495e258ce2cc_Shock.svg",
    },
    {
      name: "Corrosive",
      image:
        "https://global-uploads.webflow.com/5ff36780a108495c598ce192/6234621bd868059ed12368de_Corrosive.svg",
    },
    {
      name: "Slag",
      image:
        "https://global-uploads.webflow.com/5ff36780a108495c598ce192/6031690bc9a9b65004a338b1_Slag.svg",
    },
    {
      name: "Explosive",
      image:
        "https://global-uploads.webflow.com/5ff36780a108495c598ce192/5ff36780a1084982ae8ce2c2_Explosive.svg",
    },
    {
      name: "Non Elemental",
      image:
        "https://global-uploads.webflow.com/5ff36780a108495c598ce192/5ff36780a10849e5448ce2ca_Nonelemental.svg",
    },
  ];
  const createElements = elements.map((element) => {
    return prisma.element.upsert({
      where: {
        name: element.name,
      },
      update: {},
      create: {
        name: element.name,
        image: element.image,
        weapons: {
          create: [],
        },
      },
    });
  });

  const sources = [
    {
      name: "Hyperius",
      type: SourceType.Raid_Boss,
      description: `Hyperius the Invincible can be encountered after completing the main story of the "Captain Scarlett and Her Pirate's Booty" DLC. Required Quest: "Hyperius the Invincible" (found in Oasis)`,
      image:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/603435244288470f681dd96f_Hyperius.jpg",
    },
    {
      name: "Seraph Vendor",
      type: SourceType.Vendor,
      description: `Seraph Vendors sell gear in exchange for Seraph Crystals.Seraph Crystals are dropped from Seraph Guardians (DLC Invincible Bosses).If the desired item is not for sale reload and try again.`,
      image:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/6034c74ba1739e0bcf4c9f44_Seraph-Vendor-Oasis-p-800.jpeg",
    },
    {
      name: "Big Sleep",
      type: SourceType.Boss,
      description: `Big Sleep is a story Boss of the "Captain Scarlett and Her Pirate's Booty" DLC. He is Sandman's Bodyguard.`,
      image:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/603433b82a29668be2a0b503_Big-Sleep.jpg",
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
      image:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/601f17ef4267b53f560d2ff1_Washburne-Refinery.jpg",
      mapImage:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/61843cc40a93fd030a8dfd37_Washburne%20Refinery.png",
      content: Content.Pirates_Booty,
      sources: { connect: { name: "Hyperius" } },
    },
    {
      name: "Oasis",
      image:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/601f12b5d1207826090c42cb_Oasis.jpg",
      mapImage:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/61843c8f1978b34a8a4f0e9c_Oasis.png",
      content: Content.Pirates_Booty,
      sources: { connect: { name: "Seraph Vendor" } },
    },
    {
      name: "Hayter's Folly",
      image:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/601f1040c5874c49b7045508_Hayter%27s-Folly.jpg",
      mapImage:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/61843cae1880f00f62c58abe_Hayter_s%20Folly.png",
      content: Content.Pirates_Booty,
      sources: { connect: { name: "Big Sleep" } },
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
      name: "12 Pounder",
      description:
        "Fires a Cannonball in an arching trajectory. The Cannonball explodes when it hits an enemy or ricochets of the first surface and explodes when it hits a second surface.",
      rarity: Rarity.Blue,
      flavorText: "Nec pluribus impar, bitches.",
      type: WeaponType.Launcher,
      manufacturer: Manufacturer.Torgue,
      content: Content.Pirates_Booty,
      sources: { connect: [{ name: "Big Sleep" }] },
      image:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/5ff36780a10849e28f8d011a_12-Pounder-BL2.png",
      mapImage:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/5ff36780a1084936378cfe6c_12-Pounder-BL2.png",
      elements: { connect: { name: "Explosive" } },
    },
    {
      name: "Actualizer",
      description: "Slower bullet speed.",
      rarity: Rarity.Seraph,
      flavorText: "We need to talk about your DPS report.",
      type: WeaponType.SMG,
      manufacturer: Manufacturer.Hyperion,
      content: Content.Pirates_Booty,
      sources: { connect: [{ name: "Hyperius" }, { name: "Seraph Vendor" }] },
      image:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/5ff36780a10849738e8d0168_Actualizer-BL2.png",
      mapImage:
        "https://global-uploads.webflow.com/5ff36780a1084987868ce198/5ff36780a108495c648cfebb_Actualizer-BL2.png",
      elements: {
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
      source: { connect: { name: "Hyperius" } },
      weapon: { connect: { name: "Actualizer" } },
    },
    {
      chance: 120,
      source: { connect: { name: "Seraph Vendor" } },
      weapon: { connect: { name: "Actualizer" } },
    },
    {
      chance: 33,
      source: { connect: { name: "Big Sleep" } },
      weapon: { connect: { name: "12 Pounder" } },
    },
  ];
  const createDropChances = dropChances.map((dropChance, i) => {
    return prisma.dropChance.upsert({
      where: {
        weaponName_sourceName: {
          weaponName: dropChance.weapon.connect.name,
          sourceName: dropChance.source.connect.name,
        },
      },
      create: dropChance,
      update: {},
    });
  });

  await Promise.all(createElements);
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
