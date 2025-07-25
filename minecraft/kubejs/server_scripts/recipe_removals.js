// priority: 0

const recipes_to_remove = [
    "minecraft:lead",
    "minecraft:sticky_piston",
    "stellaris:misc/steel_nugget",
    "stellaris:misc/uranium_block",
    "stellaris:misc/steel_ingot",
    "stellaris:misc/steel_block",
    "stellaris:misc/uranium_ingot",
    "utilitarian:utility/logs_to_sticks",
    "comforts:sleeping_bag_black",
    "integrateddynamics:smelting/menril_log_coal",
    "integrateddynamics:smelting/menril_log_filled_coal",
    "mekanism:compat/ae2/certus_quartz_dust_to_silicon",
    "xycraft_machines:extractor/resin",
    "industrialforegoing:iron_gear",
    "enderio:iron_gear",
    "industrialforegoing:gold_gear",
    "jaopca:mekanism.ore_to_material.netherite_scrap"

]

const unificationRemovals = [
    'railcraft:silver_ingot_from_silver_nugget',
    'railcraft:silver_ingot',
    'railcraft:silver_block_from_silver_ingot',
    'railcraft:silver_nugget',
    'minecraft:silver_ingot_from_blasting_deepslate_silver_ore',
    'minecraft:silver_ingot_from_blasting_silver_raw',
    'minecraft:silver_ingot_from_blasting_silver_ore',
    'minecraft:silver_ingot_from_smelting_silver_raw',
    'minecraft:silver_ingot_from_smelting_silver_ore',
    'minecraft:silver_ingot_from_smelting_deepslate_silver_ore',
    'railcraft:tin_ingot_from_tin_nugget',
    'railcraft:tin_ingot',
    'railcraft:tin_nugget',
    'railcraft:tin_block_from_tin_ingot',
    'minecraft:tin_ingot_from_blasting_tin_ore',
    'minecraft:tin_ingot_from_blasting_deepslate_tin_ore',
    'minecraft:tin_ingot_from_blasting_tin_raw',
    'minecraft:tin_ingot_from_smelting_tin_raw',
    'minecraft:tin_ingot_from_smelting_tin_ore',
    'minecraft:tin_ingot_from_smelting_deepslate_tin_ore',
    'railcraft:lead_ingot_from_lead_nugget',
    'railcraft:lead_ingot',
    'railcraft:lead_nugget',
    'railcraft:lead_block_from_lead_ingot',
    'minecraft:lead_ingot_from_blasting_lead_ore',
    'minecraft:lead_ingot_from_blasting_deepslate_lead_ore',
    'minecraft:lead_ingot_from_blasting_lead_raw',
    'minecraft:lead_ingot_from_smelting_lead_raw',
    'minecraft:lead_ingot_from_smelting_lead_ore',
    'minecraft:lead_ingot_from_smelting_deepslate_lead_ore',
    'stellaris:misc/steel_ingot_from_blasting_raw_steel_ingot',
    'stellaris:misc/steel_ingot_from_smelting_raw_steel_ingot',
    'occultism:crushing/steel_dust_from_raw',
    'enderio:smelting/stellaris/misc/steel_ingot_from_smelting_raw_steel_ingot',
    'oritech:crafting/alloy/steel',
    'stellaris:misc/steel_ingot_from_blasting_steel_ore',
    'stellaris:misc/steel_ingot_from_blasting_deepslate_steel_ore',
    'stellaris:misc/steel_ingot_from_smelting_steel_ore',
    'enderio:smelting/stellaris/misc/steel_ingot_from_smelting_steel_ore',
    'stellaris:misc/steel_ingot_from_smelting_deepslate_steel_ore',
    'enderio:smelting/stellaris/misc/steel_ingot_from_smelting_deepslate_steel_ore',
    'stellaris:misc/raw_uranium_block',
    'bigreactors:reactor/reinforced/fuelrod_ingots_yellorium',
    'oritech:iron_ingot',
    'bigreactors:reactor/basic/controller_ingots_yellorium',
    'bigreactors:reactor/basic/fuelrod_ingots_yellorium',
    'bigreactors:reactor/reinforced/controller_ingots_yellorium',
    'stellaris:misc/steel_axe',
    'oritech:nickel_ingot',
    'oritech:silicon_blockblock',
    'stellaris:misc/steel_pickaxe',
    'oritech:gold_ingot',
    'oritech:copper_ingot',
    'stellaris:misc/steel_hoe',
    'railcraft:steel_helmet',
    'stellaris:misc/steel_sword',
    'bigreactors:misc/book/erguide',
    'railcraft:steel_boots',
    'oritech:silicon_blockblockinv',
    'railcraft:steel_leggings',
    'stellaris:misc/steel_shovel',
    'railcraft:steel_chestplate',
    'minecraft:cake',
    'minecolonies:soy_cream_cheese',
    'railcraft:bronze_ingot_crafted_with_ingots',
    'railcraft:invar_ingot_crafted_with_ingots',
    'railcraft:brass_ingot_crafted_with_ingots',
    "create:crafting/materials/brass_ingot_from_decompacting",
    "create:crafting/materials/zinc_ingot_from_decompacting",
    "create:crafting/materials/zinc_ingot_from_compacting",
    "create:crafting/materials/copper_nugget",
    "create:crafting/materials/zinc_nugget_from_decompacting",
    "create:crafting/materials/brass_nugget_from_decompacting",
    "create:crafting/materials/brass_block_from_compacting",
    "create:blasting/zinc_ingot_from_ore",
    "create:blasting/zinc_ingot_from_raw_ore",
    "create:smelting/zinc_ingot_from_ore",
    "create:smelting/zinc_ingot_from_raw_ore",
    "create:blasting/zinc_ingot_from_crushed",
    "create:smelting/zinc_ingot_from_crushed",
    "create:crafting/materials/zinc_block_from_compacting",
    "refinedstorage:silicon",
    "oritech:silicon_from_smelting_raw_silicon",
    "stellaris:misc/uranium_from_smelting",
    "stellaris:misc/uranium_from_blasting"
]

ServerEvents.recipes((event) => {
    //Removing Recipes
    recipes_to_remove.forEach(recipe => {
        event.remove({ id: recipe })
    });

    unificationRemovals.forEach(recipe => {
        event.remove({ id: recipe })
    });
});