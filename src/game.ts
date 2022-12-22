import * as utils from "@dcl/ecs-scene-utils"
import * as access from '@dcl/access-area'
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../7abe1ec8-bd5c-4ffe-b318-f17a330296bf/src/item"
import Script2 from "../56985185-7512-4359-9d0e-1142dc6b65a6/src/item"
import Script3 from "../b79a150e-5914-4fdf-a6b4-c7ff0c6833dd/src/item"
import Script4 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script5 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script6 from "../c1e126e7-374e-4fe3-aaae-b4211c321cf3/src/item"
import Script7 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(16, 0, 0),
  rotation: Quaternion.Euler(0, -90, 0),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
const gltfShape = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
wallPlainGlass3.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(12.832175254821777, 6.178075790405273, 0.3099203109741211),
  rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.02555982582271099, 1.1640434265136719, 40.20867156982422)
})
wallPlainGlass3.addComponentOrReplace(transform2)

const blueLights = new Entity('blueLights')
engine.addEntity(blueLights)
blueLights.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(7.082388877868652, 5.994190216064453, 8.040385246276855),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
blueLights.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("52bad6fb-9176-42db-b66d-f00b4bc647d0/blue-lights.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
blueLights.addComponentOrReplace(gltfShape2)

const chair6 = new Entity('chair6')
engine.addEntity(chair6)
chair6.setParent(_scene)
const gltfShape3 = new GLTFShape("a1149a6a-7c1a-42af-8f89-94db2f1917a3/chair.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
chair6.addComponentOrReplace(gltfShape3)
const transform4 = new Transform({
  position: new Vector3(2.4450414180755615, 6.485103607177734, 3.1030783653259277),
  rotation: new Quaternion(-6.802600373463381e-15, -0.7037858366966248, 8.389780958850679e-8, 0.7104122042655945),
  scale: new Vector3(0.5745839476585388, 0.5745825171470642, 0.5745839476585388)
})
chair6.addComponentOrReplace(transform4)

const verticalBlackPad = new Entity('verticalBlackPad')
engine.addEntity(verticalBlackPad)
verticalBlackPad.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(2.5793144702911377, 0.2916839122772217, 8.114324569702148),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2328343391418457, 1, 1.3112671375274658)
})
verticalBlackPad.addComponentOrReplace(transform5)

const wallPlainNavy2 = new Entity('wallPlainNavy2')
engine.addEntity(wallPlainNavy2)
wallPlainNavy2.setParent(_scene)
const gltfShape4 = new GLTFShape("d6efa3e9-8b73-4ca4-ab7c-c04c8d335cf0/PlainNavyWall.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
wallPlainNavy2.addComponentOrReplace(gltfShape4)
const transform6 = new Transform({
  position: new Vector3(15.53726863861084, 5.803145408630371, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.449065685272217, 0.15267740190029144, 20.47994613647461)
})
wallPlainNavy2.addComponentOrReplace(transform6)

const wallPlainNavy3 = new Entity('wallPlainNavy3')
engine.addEntity(wallPlainNavy3)
wallPlainNavy3.setParent(_scene)
wallPlainNavy3.addComponentOrReplace(gltfShape4)
const transform7 = new Transform({
  position: new Vector3(15.53726863861084, 5.803145408630371, 6.272439956665039),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.449065685272217, 0.15267740190029144, 20.609373092651367)
})
wallPlainNavy3.addComponentOrReplace(transform7)

const wallPlainWhite5 = new Entity('wallPlainWhite5')
engine.addEntity(wallPlainWhite5)
wallPlainWhite5.setParent(_scene)
const gltfShape5 = new GLTFShape("45eb9e1a-2eca-4b6f-a5c4-b0278dc7e635/PlainWhiteWall.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
wallPlainWhite5.addComponentOrReplace(gltfShape5)
const transform8 = new Transform({
  position: new Vector3(13.498405456542969, 5.239809989929199, 15.596009254455566),
  rotation: new Quaternion(-4.504429098665355e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.576655387878418, 0.16006241738796234, 0.49982765316963196)
})
wallPlainWhite5.addComponentOrReplace(transform8)

const wallPlainNavy4 = new Entity('wallPlainNavy4')
engine.addEntity(wallPlainNavy4)
wallPlainNavy4.setParent(_scene)
wallPlainNavy4.addComponentOrReplace(gltfShape4)
const transform9 = new Transform({
  position: new Vector3(15.434715270996094, 10.785113334655762, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.333807945251465, 0.15267740190029144, 53.30266189575195)
})
wallPlainNavy4.addComponentOrReplace(transform9)

const wallPlainNavy5 = new Entity('wallPlainNavy5')
engine.addEntity(wallPlainNavy5)
wallPlainNavy5.setParent(_scene)
wallPlainNavy5.addComponentOrReplace(gltfShape4)
const transform10 = new Transform({
  position: new Vector3(13.083565711975098, 5.989432334899902, 0.8122129440307617),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.3044668138027191, 1.3172951936721802, 2.152791976928711)
})
wallPlainNavy5.addComponentOrReplace(transform10)

const wallPlainNavy6 = new Entity('wallPlainNavy6')
engine.addEntity(wallPlainNavy6)
wallPlainNavy6.setParent(_scene)
wallPlainNavy6.addComponentOrReplace(gltfShape4)
const transform11 = new Transform({
  position: new Vector3(13.083565711975098, 5.989432334899902, 15.931600570678711),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.3044668138027191, 1.3172951936721802, 2.152791976928711)
})
wallPlainNavy6.addComponentOrReplace(transform11)

const wallPlainNavy7 = new Entity('wallPlainNavy7')
engine.addEntity(wallPlainNavy7)
wallPlainNavy7.setParent(_scene)
wallPlainNavy7.addComponentOrReplace(gltfShape4)
const transform12 = new Transform({
  position: new Vector3(1.3606202602386475, 5.989432334899902, 0.7749519348144531),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.3044668138027191, 1.3172951936721802, 2.152791976928711)
})
wallPlainNavy7.addComponentOrReplace(transform12)

const wallPlainNavy8 = new Entity('wallPlainNavy8')
engine.addEntity(wallPlainNavy8)
wallPlainNavy8.setParent(_scene)
wallPlainNavy8.addComponentOrReplace(gltfShape4)
const transform13 = new Transform({
  position: new Vector3(1.4100322723388672, 5.989432334899902, 15.977540969848633),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.3044668138027191, 1.3172951936721802, 2.152791976928711)
})
wallPlainNavy8.addComponentOrReplace(transform13)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
wallPlainGlass.addComponentOrReplace(gltfShape)
const transform14 = new Transform({
  position: new Vector3(12.679328918457031, 6.27341365814209, 15.622406005859375),
  rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.025559628382325172, 1.1490641832351685, 38.876522064208984)
})
wallPlainGlass.addComponentOrReplace(transform14)

const wallPlainNavy = new Entity('wallPlainNavy')
engine.addEntity(wallPlainNavy)
wallPlainNavy.setParent(_scene)
wallPlainNavy.addComponentOrReplace(gltfShape4)
const transform15 = new Transform({
  position: new Vector3(15.547675132751465, 5.796176910400391, 3.7586545944213867),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.4619140625, 2.1425509452819824, 2.0422627925872803)
})
wallPlainNavy.addComponentOrReplace(transform15)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape6 = new GLTFShape("ea013d0a-8f70-44ca-be3d-706d46cb7ed2/FloorBaseGrass_02/FloorBaseGrass_02.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
entity.addComponentOrReplace(gltfShape6)
const transform16 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform16)

const wallPlainWhite3 = new Entity('wallPlainWhite3')
engine.addEntity(wallPlainWhite3)
wallPlainWhite3.setParent(_scene)
wallPlainWhite3.addComponentOrReplace(gltfShape5)
const transform17 = new Transform({
  position: new Vector3(0.09058956801891327, 0.016780376434326172, 15.998976707458496),
  rotation: new Quaternion(-4.504429098665355e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(8.00101089477539, 0.07677725702524185, 46.58578109741211)
})
wallPlainWhite3.addComponentOrReplace(transform17)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
wallPlainGlass2.addComponentOrReplace(gltfShape)
const transform18 = new Transform({
  position: new Vector3(13.068754196166992, 6.27341365814209, 12.403573036193848),
  rotation: new Quaternion(7.720697690926422e-15, 0, -6.0168951526891334e-15, -1),
  scale: new Vector3(0.02555938810110092, 1.1331336498260498, 30.252025604248047)
})
wallPlainGlass2.addComponentOrReplace(transform18)

const wallPlainGlass5 = new Entity('wallPlainGlass5')
engine.addEntity(wallPlainGlass5)
wallPlainGlass5.setParent(_scene)
wallPlainGlass5.addComponentOrReplace(gltfShape)
const transform19 = new Transform({
  position: new Vector3(0.9782123565673828, 6.27341365814209, 15.56556510925293),
  rotation: new Quaternion(7.720697690926422e-15, 0, -6.0168951526891334e-15, -1),
  scale: new Vector3(0.02555938810110092, 1.1300945281982422, 49.868896484375)
})
wallPlainGlass5.addComponentOrReplace(transform19)

const wallPlainGlass8 = new Entity('wallPlainGlass8')
engine.addEntity(wallPlainGlass8)
wallPlainGlass8.setParent(_scene)
wallPlainGlass8.addComponentOrReplace(gltfShape)
const transform20 = new Transform({
  position: new Vector3(0.9310894012451172, 0.12735581398010254, 6.170785903930664),
  rotation: new Quaternion(-8.198724122841176e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.9756251573562622, 1.4669703245162964, -0.0898682028055191)
})
wallPlainGlass8.addComponentOrReplace(transform20)

const indicatorArrowBlue = new Entity('indicatorArrowBlue')
engine.addEntity(indicatorArrowBlue)
indicatorArrowBlue.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(0.7491602897644043, 4.4386725425720215, 8.184469223022461),
  rotation: new Quaternion(0.7071067094802856, -1.000987666088804e-7, -0.70710688829422, 1.5805076358788028e-8),
  scale: new Vector3(3.692415237426758, 3.539341688156128, 1)
})
indicatorArrowBlue.addComponentOrReplace(transform21)

const smallPalmTree2 = new Entity('smallPalmTree2')
engine.addEntity(smallPalmTree2)
smallPalmTree2.setParent(_scene)
const gltfShape7 = new GLTFShape("3f7e1dbd-8693-409d-9dd9-2a06feaadec9/JunglePlant_07/JunglePlant_07.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
smallPalmTree2.addComponentOrReplace(gltfShape7)
const transform22 = new Transform({
  position: new Vector3(15.000290870666504, 0, 3.345691204071045),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
smallPalmTree2.addComponentOrReplace(transform22)

const smallPalmTree4 = new Entity('smallPalmTree4')
engine.addEntity(smallPalmTree4)
smallPalmTree4.setParent(_scene)
smallPalmTree4.addComponentOrReplace(gltfShape7)
const transform23 = new Transform({
  position: new Vector3(15.000290870666504, 0, 12.972268104553223),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
smallPalmTree4.addComponentOrReplace(transform23)

const wallPlainNavy18 = new Entity('wallPlainNavy18')
engine.addEntity(wallPlainNavy18)
wallPlainNavy18.setParent(_scene)
wallPlainNavy18.addComponentOrReplace(gltfShape4)
const transform24 = new Transform({
  position: new Vector3(0.9714736938476562, 6.430433750152588, 12.0595064163208),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.1668115109205246, 1.9916106462478638, 2.0164968967437744)
})
wallPlainNavy18.addComponentOrReplace(transform24)

const wallPlainGlass11 = new Entity('wallPlainGlass11')
engine.addEntity(wallPlainGlass11)
wallPlainGlass11.setParent(_scene)
wallPlainGlass11.addComponentOrReplace(gltfShape)
const transform25 = new Transform({
  position: new Vector3(15.4249267578125, 6.294668197631836, 15.803537368774414),
  rotation: new Quaternion(7.720697690926422e-15, 0, -6.0168951526891334e-15, -1),
  scale: new Vector3(0.025559520348906517, 0.3678100109100342, 51.34998321533203)
})
wallPlainGlass11.addComponentOrReplace(transform25)

const wallPlainGlass12 = new Entity('wallPlainGlass12')
engine.addEntity(wallPlainGlass12)
wallPlainGlass12.setParent(_scene)
wallPlainGlass12.addComponentOrReplace(gltfShape)
const transform26 = new Transform({
  position: new Vector3(15.4249267578125, 6.294668197631836, 15.749937057495117),
  rotation: new Quaternion(2.25201835532627e-15, -0.7071068286895752, 8.429368136830817e-8, -0.7071067690849304),
  scale: new Vector3(0.025559520348906517, 0.3678100109100342, 9.48599624633789)
})
wallPlainGlass12.addComponentOrReplace(transform26)

const wallPlainGlass13 = new Entity('wallPlainGlass13')
engine.addEntity(wallPlainGlass13)
wallPlainGlass13.setParent(_scene)
wallPlainGlass13.addComponentOrReplace(gltfShape)
const transform27 = new Transform({
  position: new Vector3(15.4249267578125, 6.294668197631836, 0.35666847229003906),
  rotation: new Quaternion(2.25201835532627e-15, -0.7071068286895752, 8.429368136830817e-8, -0.7071067690849304),
  scale: new Vector3(0.025559520348906517, 0.3678100109100342, 9.48599624633789)
})
wallPlainGlass13.addComponentOrReplace(transform27)

const chair = new Entity('chair')
engine.addEntity(chair)
chair.setParent(_scene)
chair.addComponentOrReplace(gltfShape3)
const transform28 = new Transform({
  position: new Vector3(3.0035667419433594, 0.41177988052368164, 2.8434481620788574),
  rotation: new Quaternion(5.634815954358137e-15, -0.6755027770996094, 8.052619904219682e-8, 0.737357497215271),
  scale: new Vector3(0.7255221009254456, 0.7255198955535889, 0.7255221009254456)
})
chair.addComponentOrReplace(transform28)

const ringWhiteLight = new Entity('ringWhiteLight')
engine.addEntity(ringWhiteLight)
ringWhiteLight.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(2.582061767578125, 0.2649099826812744, 8.09510612487793),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.3568679094314575, 1, 1.460626244544983)
})
ringWhiteLight.addComponentOrReplace(transform29)
const gltfShape8 = new GLTFShape("d4837726-ae7f-4ca9-9886-677094735f82/Ring_White_Light.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
ringWhiteLight.addComponentOrReplace(gltfShape8)

const chair2 = new Entity('chair2')
engine.addEntity(chair2)
chair2.setParent(_scene)
chair2.addComponentOrReplace(gltfShape3)
const transform30 = new Transform({
  position: new Vector3(8.8282470703125, 6.485103607177734, 13.741964340209961),
  rotation: new Quaternion(1.4025494471947846e-15, 0, -3.1401851283233704e-16, -1),
  scale: new Vector3(0.5745833516120911, 0.5745825171470642, 0.5745833516120911)
})
chair2.addComponentOrReplace(transform30)

const chair3 = new Entity('chair3')
engine.addEntity(chair3)
chair3.setParent(_scene)
chair3.addComponentOrReplace(gltfShape3)
const transform31 = new Transform({
  position: new Vector3(4.328990936279297, 6.485103607177734, 13.741964340209961),
  rotation: new Quaternion(1.4025494471947846e-15, 0, -3.1401851283233704e-16, -1),
  scale: new Vector3(0.5745833516120911, 0.5745825171470642, 0.5745833516120911)
})
chair3.addComponentOrReplace(transform31)

const wallPlainWhite6 = new Entity('wallPlainWhite6')
engine.addEntity(wallPlainWhite6)
wallPlainWhite6.setParent(_scene)
wallPlainWhite6.addComponentOrReplace(gltfShape5)
const transform32 = new Transform({
  position: new Vector3(5.160883903503418, 6.256921291351318, 0.3727121949195862),
  rotation: new Quaternion(-4.504429098665355e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.032145656645298004, 1.195061445236206, 25.083581924438477)
})
wallPlainWhite6.addComponentOrReplace(transform32)

const wallPlainNavy10 = new Entity('wallPlainNavy10')
engine.addEntity(wallPlainNavy10)
wallPlainNavy10.setParent(_scene)
wallPlainNavy10.addComponentOrReplace(gltfShape4)
const transform33 = new Transform({
  position: new Vector3(4.714219570159912, 5.814704895019531, 4.120731830596924),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.965767741203308, 0.5580837726593018, 2.029353618621826)
})
wallPlainNavy10.addComponentOrReplace(transform33)

const wallPlainNavy11 = new Entity('wallPlainNavy11')
engine.addEntity(wallPlainNavy11)
wallPlainNavy11.setParent(_scene)
wallPlainNavy11.addComponentOrReplace(gltfShape4)
const transform34 = new Transform({
  position: new Vector3(4.71422004699707, 5.816680908203125, 9.710762977600098),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.965767741203308, 0.47331446409225464, 2.029353141784668)
})
wallPlainNavy11.addComponentOrReplace(transform34)

const wallPlainGlass10 = new Entity('wallPlainGlass10')
engine.addEntity(wallPlainGlass10)
wallPlainGlass10.setParent(_scene)
wallPlainGlass10.addComponentOrReplace(gltfShape)
const transform35 = new Transform({
  position: new Vector3(13.331583976745605, 0.052791595458984375, 0.4385948181152344),
  rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.02556001767516136, 1.4170180559158325, 41.00596237182617)
})
wallPlainGlass10.addComponentOrReplace(transform35)

const blockFloorLight5 = new Entity('blockFloorLight5')
engine.addEntity(blockFloorLight5)
blockFloorLight5.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(7.507385730743408, 0.015105247497558594, 0.5978603363037109),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.139911651611328, 4.901440620422363, 0.7233404517173767)
})
blockFloorLight5.addComponentOrReplace(transform36)

const blockFloorLight = new Entity('blockFloorLight')
engine.addEntity(blockFloorLight)
blockFloorLight.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(3.933688163757324, 6.081916809082031, 0.3439446687698364),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.31599941849708557, 4.114336967468262, 0.27955377101898193)
})
blockFloorLight.addComponentOrReplace(transform37)

const blockFloorLight6 = new Entity('blockFloorLight6')
engine.addEntity(blockFloorLight6)
blockFloorLight6.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(9.747428894042969, 6.081916809082031, 15.688691139221191),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.36005744338035583, 4.114336967468262, 0.27955377101898193)
})
blockFloorLight6.addComponentOrReplace(transform38)

const wallPlainGlass14 = new Entity('wallPlainGlass14')
engine.addEntity(wallPlainGlass14)
wallPlainGlass14.setParent(_scene)
wallPlainGlass14.addComponentOrReplace(gltfShape)
const transform39 = new Transform({
  position: new Vector3(13.300585746765137, 0.052791595458984375, 15.768890380859375),
  rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.02556018903851509, 1.5822160243988037, 41.263668060302734)
})
wallPlainGlass14.addComponentOrReplace(transform39)

const blockFloorLight7 = new Entity('blockFloorLight7')
engine.addEntity(blockFloorLight7)
blockFloorLight7.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(15.464180946350098, 10.685285568237305, 15.81299114227295),
  rotation: new Quaternion(0, 0, 0.9999942183494568, 0.0034109053667634726),
  scale: new Vector3(0.06334322690963745, -0.5221639275550842, 49.978023529052734)
})
blockFloorLight7.addComponentOrReplace(transform40)

const blockFloorLight8 = new Entity('blockFloorLight8')
engine.addEntity(blockFloorLight8)
blockFloorLight8.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(6.003561019897461, 5.823606014251709, 9.810080528259277),
  rotation: new Quaternion(0, 0, 0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.09480147808790207, 0.1156560629606247, 11.251601219177246)
})
blockFloorLight8.addComponentOrReplace(transform41)

const blockFloorLight10 = new Entity('blockFloorLight10')
engine.addEntity(blockFloorLight10)
blockFloorLight10.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(11.546566009521484, 5.8217339515686035, 9.75144100189209),
  rotation: new Quaternion(0.5000001192092896, 0.5000000596046448, 0.4999999403953552, 0.5),
  scale: new Vector3(0.09480220079421997, 0.059739794582128525, 18.263694763183594)
})
blockFloorLight10.addComponentOrReplace(transform42)

const concreteWall4 = new Entity('concreteWall4')
engine.addEntity(concreteWall4)
concreteWall4.setParent(_scene)
const gltfShape9 = new GLTFShape("53aa3052-ccd7-4a05-be3f-f840acbff99e/Concrete_Wall.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
concreteWall4.addComponentOrReplace(gltfShape9)
const transform43 = new Transform({
  position: new Vector3(0.9611854553222656, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.10698623210191727, 1.474278450012207, 20.11790657043457)
})
concreteWall4.addComponentOrReplace(transform43)

const blockFloorLight13 = new Entity('blockFloorLight13')
engine.addEntity(blockFloorLight13)
blockFloorLight13.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(15.544386863708496, 5.877797603607178, 15.81299114227295),
  rotation: new Quaternion(0, 0, 0.9999942183494568, 0.0034109053667634726),
  scale: new Vector3(0.0633433535695076, -0.5457877516746521, 49.978023529052734)
})
blockFloorLight13.addComponentOrReplace(transform44)

const concreteWall2 = new Entity('concreteWall2')
engine.addEntity(concreteWall2)
concreteWall2.setParent(_scene)
concreteWall2.addComponentOrReplace(gltfShape9)
const transform45 = new Transform({
  position: new Vector3(1.1118898391723633, 0, 10.325148582458496),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5110880732536316, 3.0626590251922607, 15.041522979736328)
})
concreteWall2.addComponentOrReplace(transform45)

const wallPlainWhite4 = new Entity('wallPlainWhite4')
engine.addEntity(wallPlainWhite4)
wallPlainWhite4.setParent(_scene)
wallPlainWhite4.addComponentOrReplace(gltfShape5)
const transform46 = new Transform({
  position: new Vector3(12.952576637268066, 6.32818603515625, 12.466353416442871),
  rotation: new Quaternion(-4.504429098665355e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.028066420927643776, 1.166165828704834, 0.29631736874580383)
})
wallPlainWhite4.addComponentOrReplace(transform46)

const wallPlainWhite7 = new Entity('wallPlainWhite7')
engine.addEntity(wallPlainWhite7)
wallPlainWhite7.setParent(_scene)
wallPlainWhite7.addComponentOrReplace(gltfShape5)
const transform47 = new Transform({
  position: new Vector3(12.952576637268066, 6.32818603515625, 7.576387405395508),
  rotation: new Quaternion(-4.504429098665355e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.03748834878206253, 1.166165828704834, 0.29631730914115906)
})
wallPlainWhite7.addComponentOrReplace(transform47)

const chair4 = new Entity('chair4')
engine.addEntity(chair4)
chair4.setParent(_scene)
chair4.addComponentOrReplace(gltfShape3)
const transform48 = new Transform({
  position: new Vector3(5.766330718994141, 6.485103607177734, 1.9547920227050781),
  rotation: new Quaternion(-9.665724201113422e-15, -1, 1.1920928244535389e-7, 5.960464477539063e-8),
  scale: new Vector3(0.5745833516120911, 0.5745825171470642, 0.5745833516120911)
})
chair4.addComponentOrReplace(transform48)

const concreteWall5 = new Entity('concreteWall5')
engine.addEntity(concreteWall5)
concreteWall5.setParent(_scene)
concreteWall5.addComponentOrReplace(gltfShape9)
const transform49 = new Transform({
  position: new Vector3(13.530608177185059, 0, 5.9355034828186035),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.3067355155944824, 2.733889579772949, 18.48219871520996)
})
concreteWall5.addComponentOrReplace(transform49)

const blockFloorLight12 = new Entity('blockFloorLight12')
engine.addEntity(blockFloorLight12)
blockFloorLight12.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(0.6336641311645508, 5.912680149078369, 15.81299114227295),
  rotation: new Quaternion(0, 0, 0.9999942183494568, 0.0034109053667634726),
  scale: new Vector3(0.06334338337182999, -0.5457879900932312, 49.978023529052734)
})
blockFloorLight12.addComponentOrReplace(transform50)

const blockFloorLight14 = new Entity('blockFloorLight14')
engine.addEntity(blockFloorLight14)
blockFloorLight14.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(0.7444591522216797, 10.67047119140625, 15.81299114227295),
  rotation: new Quaternion(0, 0, 0.9999942183494568, 0.0034109053667634726),
  scale: new Vector3(0.06334327161312103, -0.5221642851829529, 49.978023529052734)
})
blockFloorLight14.addComponentOrReplace(transform51)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(1.1191601753234863, 7.206032752990723, 12.713628768920898),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.738742351531982, 5.374264717102051, 1.0000042915344238)
})
nftPictureFrame4.addComponentOrReplace(transform52)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(9.72628402709961, 7.21541690826416, 15.591443061828613),
  rotation: new Quaternion(4.397962774667884e-15, 1, -1.1920927533992653e-7, 2.682208730675484e-7),
  scale: new Vector3(5.0606303215026855, 5.770899295806885, 1.000004529953003)
})
nftPictureFrame5.addComponentOrReplace(transform53)

const wallPlainWhite9 = new Entity('wallPlainWhite9')
engine.addEntity(wallPlainWhite9)
wallPlainWhite9.setParent(_scene)
wallPlainWhite9.addComponentOrReplace(gltfShape5)
const transform54 = new Transform({
  position: new Vector3(12.952576637268066, 10.762571334838867, 12.446362495422363),
  rotation: new Quaternion(-4.504429098665355e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(4.993038177490234, 0.008968904614448547, 0.43642640113830566)
})
wallPlainWhite9.addComponentOrReplace(transform54)

const wallPlainWhite10 = new Entity('wallPlainWhite10')
engine.addEntity(wallPlainWhite10)
wallPlainWhite10.setParent(_scene)
wallPlainWhite10.addComponentOrReplace(gltfShape5)
const transform55 = new Transform({
  position: new Vector3(1.2887229919433594, 6.4204888343811035, 15.62061595916748),
  rotation: new Quaternion(6.024406217348911e-15, -1, 1.1920927533992653e-7, 5.960464477539063e-8),
  scale: new Vector3(5.6687541007995605, 0.008968904614448547, 0.43642568588256836)
})
wallPlainWhite10.addComponentOrReplace(transform55)

const wallPlainWhite11 = new Entity('wallPlainWhite11')
engine.addEntity(wallPlainWhite11)
wallPlainWhite11.setParent(_scene)
wallPlainWhite11.addComponentOrReplace(gltfShape5)
const transform56 = new Transform({
  position: new Vector3(1.2887229919433594, 10.762571334838867, 15.62061595916748),
  rotation: new Quaternion(6.024406217348911e-15, -1, 1.1920927533992653e-7, 5.960464477539063e-8),
  scale: new Vector3(5.668756008148193, 0.008968904614448547, 0.4364258050918579)
})
wallPlainWhite11.addComponentOrReplace(transform56)

const wallPlainWhite12 = new Entity('wallPlainWhite12')
engine.addEntity(wallPlainWhite12)
wallPlainWhite12.setParent(_scene)
wallPlainWhite12.addComponentOrReplace(gltfShape5)
const transform57 = new Transform({
  position: new Vector3(1.2887229919433594, 6.4204888343811035, 0.2622828483581543),
  rotation: new Quaternion(6.024406217348911e-15, -1, 1.1920927533992653e-7, 5.960464477539063e-8),
  scale: new Vector3(5.6687541007995605, 0.008968904614448547, 0.43642568588256836)
})
wallPlainWhite12.addComponentOrReplace(transform57)

const wallPlainWhite13 = new Entity('wallPlainWhite13')
engine.addEntity(wallPlainWhite13)
wallPlainWhite13.setParent(_scene)
wallPlainWhite13.addComponentOrReplace(gltfShape5)
const transform58 = new Transform({
  position: new Vector3(1.2887229919433594, 10.762571334838867, 0.2622828483581543),
  rotation: new Quaternion(6.024406217348911e-15, -1, 1.1920927533992653e-7, 5.960464477539063e-8),
  scale: new Vector3(5.668756008148193, 0.008968904614448547, 0.4364258050918579)
})
wallPlainWhite13.addComponentOrReplace(transform58)

const wallPlainNavy12 = new Entity('wallPlainNavy12')
engine.addEntity(wallPlainNavy12)
wallPlainNavy12.setParent(_scene)
wallPlainNavy12.addComponentOrReplace(gltfShape4)
const transform59 = new Transform({
  position: new Vector3(8.570520401000977, 1.6510300636291504, 0.8556976914405823),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.7730181217193604, 0.6500290632247925, 1.2590522766113281)
})
wallPlainNavy12.addComponentOrReplace(transform59)

// Create new Entity for this image - Tete-therepy-02

const imageFromURL = new Entity()
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
imageFromURL.addComponent(new PlaneShape())
const transform60 = new Transform({
  position: new Vector3(6.816554546356201, 2.9495777130126953, 0.8783403635025024),
  rotation: Quaternion.Euler(0, 180, 180),
  scale: new Vector3(2.502915859222412, 1.7323623895645142, 1)
})
imageFromURL.addComponentOrReplace(transform60)

imageFromURL.addComponentOrReplace(
  new OnPointerDown(() => {
    openExternalURL("https://www.linkedin.com/in/joey-ackerman-lcsw-r-1873ab43/")
  })
)
//Create texture i.e the image

const imageFromURLlinkT = new Texture("https://gateway.pinata.cloud/ipfs/QmUMcjN3r6ovr5mVQhSbAKUjwrBoEkeat7ojRzEZfTmtKL")

//Create a material
const imageFromURLlinkM = new Material()
imageFromURLlinkM.albedoTexture = imageFromURLlinkT

//Assign the material to the entity
imageFromURL.addComponent(imageFromURLlinkM)

const galleryInfoBlack = new Entity('galleryInfoBlack')
engine.addEntity(galleryInfoBlack)
galleryInfoBlack.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(12.696378707885742, 0.1764223575592041, 4.565202236175537),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.1779279708862305, 0.9496458768844604, 0.2577916979789734)
})
galleryInfoBlack.addComponentOrReplace(transform61)

const galleryInfoBlack2 = new Entity('galleryInfoBlack2')
engine.addEntity(galleryInfoBlack2)
galleryInfoBlack2.setParent(_scene)
const transform62 = new Transform({
  position: new Vector3(12.696378707885742, 6.241987228393555, 5.34897518157959),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.1779282093048096, 0.9496458768844604, 0.25779175758361816)
})
galleryInfoBlack2.addComponentOrReplace(transform62)

// Create new Entity for this image - Empire-island

const imageFromURL5 = new Entity()
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
imageFromURL5.addComponent(new PlaneShape())
const transform63 = new Transform({
  position: new Vector3(8.841949462890625, 8.38513708114624, 0.47114500403404236),
  rotation: Quaternion.Euler(0, 180, 180),
  scale: new Vector3(5.7840423583984375, 3.3580331802368164, 1)
})
imageFromURL5.addComponentOrReplace(transform63)

imageFromURL5.addComponentOrReplace(
  new OnPointerDown(() => {
    openExternalURL("https://www.empireisland.miami/")
  })
)
//Create texture i.e the image

const imageFromURL5linkT = new Texture("https://gateway.pinata.cloud/ipfs/QmQcrMiUmh4U51yvYd2HRUHWcYMFXg1iCnAQTpsuYoZL9x")

//Create a material
const imageFromURL5linkM = new Material()
imageFromURL5linkM.albedoTexture = imageFromURL5linkT

//Assign the material to the entity
imageFromURL5.addComponent(imageFromURL5linkM)

const chair5 = new Entity('chair5')
engine.addEntity(chair5)
chair5.setParent(_scene)
chair5.addComponentOrReplace(gltfShape3)
const transform64 = new Transform({
  position: new Vector3(7.098601341247559, 0.41177988052368164, 13.974620819091797),
  rotation: new Quaternion(4.644929629999978e-15, -0.03625720739364624, 4.322184832261655e-9, 0.9993425607681274),
  scale: new Vector3(0.7255222201347351, 0.7255198955535889, 0.7255222201347351)
})
chair5.addComponentOrReplace(transform64)

const wallPlainNavy13 = new Entity('wallPlainNavy13')
engine.addEntity(wallPlainNavy13)
wallPlainNavy13.setParent(_scene)
wallPlainNavy13.addComponentOrReplace(gltfShape4)
const transform65 = new Transform({
  position: new Vector3(1.399648666381836, 6.461962699890137, 15.304431915283203),
  rotation: new Quaternion(6.6273814439284616e-15, 1, -1.1920927533992653e-7, -7.450580596923828e-8),
  scale: new Vector3(1.9634199142456055, 1.1116688251495361, 1.2590522766113281)
})
wallPlainNavy13.addComponentOrReplace(transform65)

const wallPlainNavy14 = new Entity('wallPlainNavy14')
engine.addEntity(wallPlainNavy14)
wallPlainNavy14.setParent(_scene)
wallPlainNavy14.addComponentOrReplace(gltfShape4)
const transform66 = new Transform({
  position: new Vector3(12.272910118103027, 0.30696773529052734, 10.188027381896973),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.888507604598999, 0.005331560503691435, 0.6090895533561707)
})
wallPlainNavy14.addComponentOrReplace(transform66)

const wallPlainNavy15 = new Entity('wallPlainNavy15')
engine.addEntity(wallPlainNavy15)
wallPlainNavy15.setParent(_scene)
wallPlainNavy15.addComponentOrReplace(gltfShape4)
const transform67 = new Transform({
  position: new Vector3(12.272910118103027, 0.30696773529052734, 6.17132568359375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.888507604598999, 0.005331560503691435, 0.6090895533561707)
})
wallPlainNavy15.addComponentOrReplace(transform67)

const wallPlainNavy16 = new Entity('wallPlainNavy16')
engine.addEntity(wallPlainNavy16)
wallPlainNavy16.setParent(_scene)
wallPlainNavy16.addComponentOrReplace(gltfShape4)
const transform68 = new Transform({
  position: new Vector3(12.421710968017578, 0.30696773529052734, 6.062037944793701),
  rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.9805468320846558, 0.005331560503691435, 0.6090905070304871)
})
wallPlainNavy16.addComponentOrReplace(transform68)

const wallPlainNavy17 = new Entity('wallPlainNavy17')
engine.addEntity(wallPlainNavy17)
wallPlainNavy17.setParent(_scene)
wallPlainNavy17.addComponentOrReplace(gltfShape4)
const transform69 = new Transform({
  position: new Vector3(4.678543567657471, 0.30696773529052734, 6.139281749725342),
  rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.9805487394332886, 0.005331560503691435, 0.6090909838676453)
})
wallPlainNavy17.addComponentOrReplace(transform69)

const teteTherapy = new Entity('teteTherapy')
engine.addEntity(teteTherapy)
teteTherapy.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(13.547792434692383, 2.245692491531372, 2.221714973449707),
  rotation: new Quaternion(0.4999999403953552, 0.4999999701976776, -0.5000001192092896, 0.5),
  scale: new Vector3(1.574550986289978, 1.5745515823364258, 1.5745512247085571)
})
teteTherapy.addComponentOrReplace(transform70)
const gltfShape10 = new GLTFShape("4a384bd3-5924-43b2-afc0-27ad3a66f834/tete-therapy.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
teteTherapy.addComponentOrReplace(gltfShape10)

const wallPlainWhite = new Entity('wallPlainWhite')
engine.addEntity(wallPlainWhite)
wallPlainWhite.setParent(_scene)
wallPlainWhite.addComponentOrReplace(gltfShape5)
const transform71 = new Transform({
  position: new Vector3(0.6994142532348633, 0.31832265853881836, 10.358983039855957),
  rotation: new Quaternion(-4.504429098665355e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.04051396623253822, 1.386476993560791, 15.823202133178711)
})
wallPlainWhite.addComponentOrReplace(transform71)

const wallPlainWhite15 = new Entity('wallPlainWhite15')
engine.addEntity(wallPlainWhite15)
wallPlainWhite15.setParent(_scene)
wallPlainWhite15.addComponentOrReplace(gltfShape5)
const transform72 = new Transform({
  position: new Vector3(8.548494338989258, 0.31832265853881836, 10.295844078063965),
  rotation: new Quaternion(-4.504429098665355e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.04051407054066658, 1.386476993560791, 16.043603897094727)
})
wallPlainWhite15.addComponentOrReplace(transform72)

const wallPlainWhite16 = new Entity('wallPlainWhite16')
engine.addEntity(wallPlainWhite16)
wallPlainWhite16.setParent(_scene)
wallPlainWhite16.addComponentOrReplace(gltfShape5)
const transform73 = new Transform({
  position: new Vector3(8.556209564208984, 0.31832289695739746, 5.925065040588379),
  rotation: new Quaternion(-4.504429098665355e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.040514182299375534, 1.386476993560791, 16.042102813720703)
})
wallPlainWhite16.addComponentOrReplace(transform73)

const logoFrame = new Entity('logoFrame')
engine.addEntity(logoFrame)
logoFrame.setParent(_scene)
const transform74 = new Transform({
  position: new Vector3(13.545283317565918, 1.8864405155181885, 3.059368371963501),
  rotation: new Quaternion(1.5246666107169107e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.8436533808708191, 0.8982879519462585, 1.0000038146972656)
})
logoFrame.addComponentOrReplace(transform74)
const gltfShape11 = new GLTFShape("fb843a16-69c5-4173-aaed-767c1af8e251/logo-frame.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
logoFrame.addComponentOrReplace(gltfShape11)

const wallPlainGlass4 = new Entity('wallPlainGlass4')
engine.addEntity(wallPlainGlass4)
wallPlainGlass4.setParent(_scene)
wallPlainGlass4.addComponentOrReplace(gltfShape)
const transform75 = new Transform({
  position: new Vector3(13.512738227844238, 0.29656410217285156, 5.876672267913818),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.025558941066265106, 1.4492039680480957, 5.299685955047607)
})
wallPlainGlass4.addComponentOrReplace(transform75)

const wallPlainNavy19 = new Entity('wallPlainNavy19')
engine.addEntity(wallPlainNavy19)
wallPlainNavy19.setParent(_scene)
wallPlainNavy19.addComponentOrReplace(gltfShape4)
const transform76 = new Transform({
  position: new Vector3(4.563515663146973, 3.761282444000244, 5.955014228820801),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.021611420437693596, 1.0916558504104614, 7.671079158782959)
})
wallPlainNavy19.addComponentOrReplace(transform76)

const logoFrameBlack = new Entity('logoFrameBlack')
engine.addEntity(logoFrameBlack)
logoFrameBlack.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(10.472729682922363, 2.717829942703247, 10.127911567687988),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0668041706085205, 0.4621317386627197, 0.8460264205932617)
})
logoFrameBlack.addComponentOrReplace(transform77)
const gltfShape12 = new GLTFShape("9406c969-5b32-44eb-a43c-9331de2294e5/logo-frame-black.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
logoFrameBlack.addComponentOrReplace(gltfShape12)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(10.441166877746582, 2.2860662937164307, 6.01290225982666),
  rotation: new Quaternion(7.105429051666896e-15, -1.7881393432617188e-7, 2.748470294942646e-14, 1),
  scale: new Vector3(1.42074453830719, 0.8973683714866638, 1.0000008344650269)
})
imageFromURL7.addComponentOrReplace(transform78)

const logoFrameBlack2 = new Entity('logoFrameBlack2')
engine.addEntity(logoFrameBlack2)
logoFrameBlack2.setParent(_scene)
logoFrameBlack2.addComponentOrReplace(gltfShape12)
const transform79 = new Transform({
  position: new Vector3(10.403220176696777, 2.119474172592163, 6.0052313804626465),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6877821683883667, 0.5706440806388855, 1)
})
logoFrameBlack2.addComponentOrReplace(transform79)

// Create new Entity for this image - Tete-therepy-poster -1

const imageFromURL8 = new Entity()
engine.addEntity(imageFromURL8)
imageFromURL8.setParent(_scene)
imageFromURL8.addComponent(new PlaneShape())
const transform80 = new Transform({
  position: new Vector3(3.5400099754333496, 3.0399090766906738, 5.7943572998046875),
  rotation: Quaternion.Euler(0, 0, 180),
  scale: new Vector3(2.6313743591308594, 3.7383627891540527, 1)
})
imageFromURL8.addComponentOrReplace(transform80)

imageFromURL8.addComponentOrReplace(
  new OnPointerDown(() => {
    openExternalURL("https://www.tetetherapy.com/about")
  })
)
//Create texture i.e the image

const imageFromURL8linkT = new Texture("https://gateway.pinata.cloud/ipfs/QmQSNCFo3ZEMpT4eECMAwTDVZPKmsufNc13R1YZMeWAo3K")

//Create a material
const imageFromURL8linkM = new Material()
imageFromURL8linkM.albedoTexture = imageFromURL8linkT

//Assign the material to the entity
imageFromURL8.addComponent(imageFromURL8linkM)

// Create new Entity for this image - Urban-standard-01

const imageFromURL12 = new Entity()
engine.addEntity(imageFromURL12)
imageFromURL12.setParent(_scene)
imageFromURL12.addComponent(new PlaneShape())
const transform81 = new Transform({
  position: new Vector3(3.1657094955444336, 3.02541619539260864, 10.371564865112305),
  rotation: Quaternion.Euler(0, 180, 180),
  scale: new Vector3(2.607569456100464, 3.7120440006256104, 1)
})
imageFromURL12.addComponentOrReplace(transform81)

imageFromURL12.addComponentOrReplace(
  new OnPointerDown(() => {
    openExternalURL("https://www.urbanstandard.nyc/")
  })
)
//Create texture i.e the image

const imageFromURL12linkT = new Texture("https://gateway.pinata.cloud/ipfs/QmNzXBPu6i6pbSeeKHeUwMw1pcCfBRBGpntPY9mjnAN6Yk")

//Create a material
const imageFromURL12linkM = new Material()
imageFromURL12linkM.albedoTexture = imageFromURL12linkT

//Assign the material to the entity
imageFromURL12.addComponent(imageFromURL12linkM)

const imageFromURL13 = new Entity()
engine.addEntity(imageFromURL13)
imageFromURL13.setParent(_scene)
imageFromURL13.addComponent(new PlaneShape())
const transform82 = new Transform({
  position: new Vector3(13.044649124145508, 3.0234328031539917, 12.9956693649292),
  rotation: Quaternion.Euler(0, 90, 180),
  scale: new Vector3(2.893869400024414, 4.156767845153809, 1)
})
imageFromURL13.addComponentOrReplace(transform82)

imageFromURL13.addComponentOrReplace(
  new OnPointerDown(() => {
    openExternalURL("https://www.urbanstandard.nyc/")
  })
)
//Create texture i.e the image

const imageFromURL13linkT = new Texture("https://gateway.pinata.cloud/ipfs/QmQDEbkH9U7Xh8yykdakYp9kDJehFqgVtRCfqH7orLQpJ5")

//Create a material
const imageFromURL13linkM = new Material()
imageFromURL13linkM.albedoTexture = imageFromURL13linkT

//Assign the material to the entity
imageFromURL13.addComponent(imageFromURL13linkM)


const concreteWall3 = new Entity('concreteWall3')
engine.addEntity(concreteWall3)
concreteWall3.setParent(_scene)
concreteWall3.addComponentOrReplace(gltfShape9)
const transform83 = new Transform({
  position: new Vector3(1.1118898391723633, 0, 6.163264751434326),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.10698623210191727, 1.474278450012207, 20.11790657043457)
})
concreteWall3.addComponentOrReplace(transform83)

const galleryInfoBlack3 = new Entity('galleryInfoBlack3')
engine.addEntity(galleryInfoBlack3)
galleryInfoBlack3.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(1.1562824249267578, 0.1764223575592041, 11.429483413696289),
  rotation: new Quaternion(2.3091231990477867e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.1779298782348633, 0.9496458768844604, 0.2577921748161316)
})
galleryInfoBlack3.addComponentOrReplace(transform84)

const wallPlainNavy20 = new Entity('wallPlainNavy20')
engine.addEntity(wallPlainNavy20)
wallPlainNavy20.setParent(_scene)
wallPlainNavy20.addComponentOrReplace(gltfShape4)
const transform85 = new Transform({
  position: new Vector3(4.563515663146973, 0.1606769561767578, 5.955014228820801),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.021611420437693596, 0.024243822321295738, 13.512228965759277)
})
wallPlainNavy20.addComponentOrReplace(transform85)

const wallPlainNavy21 = new Entity('wallPlainNavy21')
engine.addEntity(wallPlainNavy21)
wallPlainNavy21.setParent(_scene)
wallPlainNavy21.addComponentOrReplace(gltfShape4)
const transform86 = new Transform({
  position: new Vector3(4.71422004699707, 0.2977944612503052, 10.0931978225708),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.021611420437693596, 0.024243799969553947, 13.51221752166748)
})
wallPlainNavy21.addComponentOrReplace(transform86)

const urbanStandard = new Entity('urbanStandard')
engine.addEntity(urbanStandard)
urbanStandard.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(10.509458541870117, 3.5853681564331055, 10.135771751403809),
  rotation: new Quaternion(-1, -7.4505820180093e-8, 6.2405846955977326e-15, 3.2782554626464844e-7),
  scale: new Vector3(0.3013257384300232, 0.3013257384300232, 0.3013257384300232)
})
urbanStandard.addComponentOrReplace(transform87)
const gltfShape13 = new GLTFShape("a4b1e06a-262e-4511-8cfa-aef1fdb5a9c5/urban-standard.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
urbanStandard.addComponentOrReplace(gltfShape13)

const concreteWall = new Entity('concreteWall')
engine.addEntity(concreteWall)
concreteWall.setParent(_scene)
concreteWall.addComponentOrReplace(gltfShape9)
const transform88 = new Transform({
  position: new Vector3(13.085476875305176, 0, 15.883599281311035),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-0.16380470991134644, 1.588223934173584, 19.02121353149414)
})
concreteWall.addComponentOrReplace(transform88)

const logoFrame2 = new Entity('logoFrame2')
engine.addEntity(logoFrame2)
logoFrame2.setParent(_scene)
logoFrame2.addComponentOrReplace(gltfShape11)
const transform89 = new Transform({
  position: new Vector3(13.583113670349121, 2.6053194999694824, 12.75048542022705),
  rotation: new Quaternion(1.5246666107169107e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.1546268463134766, 0.4316861033439636, 1.000007152557373)
})
logoFrame2.addComponentOrReplace(transform89)

const urbanStandard2 = new Entity('urbanStandard2')
engine.addEntity(urbanStandard2)
urbanStandard2.setParent(_scene)
urbanStandard2.addComponentOrReplace(gltfShape13)
const transform90 = new Transform({
  position: new Vector3(13.579667091369629, 3.4661574363708496, 12.74069595336914),
  rotation: new Quaternion(-0.7071068286895752, -3.687849812195054e-7, -0.7071068286895752, 1.791241146520406e-7),
  scale: new Vector3(0.3013262152671814, 0.30132585763931274, 0.3013262152671814)
})
urbanStandard2.addComponentOrReplace(transform90)

const wallPlainWhite17 = new Entity('wallPlainWhite17')
engine.addEntity(wallPlainWhite17)
wallPlainWhite17.setParent(_scene)
wallPlainWhite17.addComponentOrReplace(gltfShape5)
const transform91 = new Transform({
  position: new Vector3(0.8501186370849609, 0.3183227777481079, 5.902124404907227),
  rotation: new Quaternion(-4.504429098665355e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.04051421955227852, 1.386476993560791, 16.487777709960938)
})
wallPlainWhite17.addComponentOrReplace(transform91)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(12.828936576843262, 1.851750373840332, 1.3736653327941895),
  rotation: new Quaternion(4.859106675273556e-16, -0.6354315280914307, 7.574932681109203e-8, 0.7721573114395142),
  scale: new Vector3(1.2409294843673706, 1.3071658611297607, 1.0092689990997314)
})
externalLink.addComponentOrReplace(transform92)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(0.9196963310241699, 1.797347068786621, 14.792208671569824),
  rotation: new Quaternion(1.0601145671688419e-15, -0.7086008191108704, 8.44717860104538e-8, 0.7056096792221069),
  scale: new Vector3(1.62380051612854, 1.529547095298767, 1.0000096559524536)
})
externalLink2.addComponentOrReplace(transform93)

const empireIsland = new Entity('empireIsland')
engine.addEntity(empireIsland)
empireIsland.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(13.563557624816895, 9.620160102844238, 3.2087345123291016),
  rotation: new Quaternion(0.70710688829422, 8.429369557916289e-8, 0.7071067690849304, 7.267258931404567e-15),
  scale: new Vector3(0.22575643658638, 0.27468931674957275, 0.5251802206039429)
})
empireIsland.addComponentOrReplace(transform94)
const gltfShape14 = new GLTFShape("238cff96-51d5-4842-87b7-9a38942dbef9/empire-island.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
empireIsland.addComponentOrReplace(gltfShape14)

const logoFrame3 = new Entity('logoFrame3')
engine.addEntity(logoFrame3)
logoFrame3.setParent(_scene)
logoFrame3.addComponentOrReplace(gltfShape11)
const transform95 = new Transform({
  position: new Vector3(13.545283317565918, 7.7852630615234375, 3.2208030223846436),
  rotation: new Quaternion(1.5246666107169107e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.8436557054519653, 0.9348287582397461, 1.0000052452087402)
})
logoFrame3.addComponentOrReplace(transform95)

const empireIsland2 = new Entity('empireIsland2')
engine.addEntity(empireIsland2)
empireIsland2.setParent(_scene)
empireIsland2.addComponentOrReplace(gltfShape14)
const transform96 = new Transform({
  position: new Vector3(4.575638771057129, 5.4682817459106445, 8.045129776000977),
  rotation: new Quaternion(0.70710688829422, 8.429369557916289e-8, 0.7071067690849304, 7.267258931404567e-15),
  scale: new Vector3(0.16296857595443726, 0.21201500296592712, 0.5251826047897339)
})
empireIsland2.addComponentOrReplace(transform96)

const externalLink3 = new Entity('externalLink3')
engine.addEntity(externalLink3)
externalLink3.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(12.926432609558105, 7.958884239196777, 1.9476089477539062),
  rotation: new Quaternion(-1.7828098752056126e-14, -0.7234066128730774, 8.623676706065453e-8, -0.6904223561286926),
  scale: new Vector3(2.122530698776245, 1.527355670928955, 1.0000215768814087)
})
externalLink3.addComponentOrReplace(transform97)

const blockFloorLight2 = new Entity('blockFloorLight2')
engine.addEntity(blockFloorLight2)
blockFloorLight2.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(11.546566009521484, 5.8217339515686035, 6.3031816482543945),
  rotation: new Quaternion(0.5000001192092896, 0.5000000596046448, 0.4999999403953552, 0.5),
  scale: new Vector3(0.09480229020118713, 0.05973982438445091, 18.263702392578125)
})
blockFloorLight2.addComponentOrReplace(transform98)

const blockFloorLight3 = new Entity('blockFloorLight3')
engine.addEntity(blockFloorLight3)
blockFloorLight3.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(11.53537654876709, 5.823606014251709, 9.810080528259277),
  rotation: new Quaternion(0, 0, 0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.09480168670415878, 0.11565618216991425, 11.251601219177246)
})
blockFloorLight3.addComponentOrReplace(transform99)

const wallPlainWhite2 = new Entity('wallPlainWhite2')
engine.addEntity(wallPlainWhite2)
wallPlainWhite2.setParent(_scene)
wallPlainWhite2.addComponentOrReplace(gltfShape5)
const transform100 = new Transform({
  position: new Vector3(12.952576637268066, 6.380926132202148, 12.446362495422363),
  rotation: new Quaternion(-4.504429098665355e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(4.993039131164551, 0.008968904614448547, 0.43642657995224)
})
wallPlainWhite2.addComponentOrReplace(transform100)

// Create new Entity for this image - Tete-therepy-poster-02

const imageFromURL3 = new Entity()
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
imageFromURL3.addComponent(new PlaneShape())
const transform101 = new Transform({
  position: new Vector3(10.701221466064453, 3.0399090766906738, 5.7943572998046875),
  rotation: Quaternion.Euler(0, 0, 180),
  scale: new Vector3(2.6313743591308594, 3.7383627891540527, 1)
})
imageFromURL3.addComponentOrReplace(transform101)

imageFromURL3.addComponentOrReplace(
  new OnPointerDown(() => {
    openExternalURL("https://www.tetetherapy.com//")
  })
)
//Create texture i.e the image

const imageFromURL3linkT = new Texture("https://gateway.pinata.cloud/ipfs/QmTo7AxGNZDmFzJWHY7XzmfumDDdjjntrwysGr8qpVDFjw")

//Create a material
const imageFromURL3linkM = new Material()
imageFromURL3linkM.albedoTexture = imageFromURL3linkT

//Assign the material to the entity
imageFromURL3.addComponent(imageFromURL3linkM)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(1.1191601753234863, 7.206032752990723, 3.486781120300293),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.738743305206299, 5.374264717102051, 1.000004529953003)
})
nftPictureFrame3.addComponentOrReplace(transform102)

// Create new Entity for this image - Tete-therepy-poster-02

const imageFromURL2 = new Entity()
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
imageFromURL2.addComponent(new PlaneShape())
const transform103 = new Transform({
  position: new Vector3(1.2104263305664062, 3.0223149061203003, 3.169132709503174),
  rotation: Quaternion.Euler(0, -90, 180),
  scale: new Vector3(2.5238614082336426, 3.107447338104248, 1)
})
imageFromURL2.addComponentOrReplace(transform103)

imageFromURL2.addComponentOrReplace(
  new OnPointerDown(() => {
    openExternalURL("https://www.tetetherapy.com/about")
  })
)
//Create texture i.e the image

const imageFromURL2linkT = new Texture("https://gateway.pinata.cloud/ipfs/QmbmAqtSTMCvjwZk78iZuYnVycGeTprUrr9kpHWdgSp7oh")

//Create a material
const imageFromURL2linkM = new Material()
imageFromURL2linkM.albedoTexture = imageFromURL2linkT

//Assign the material to the entity
imageFromURL2.addComponent(imageFromURL2linkM)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(10.641063690185547, 1.5926073789596558, 10.311440467834473),
  rotation: new Quaternion(-4.538455470947745e-15, 0.0035616103559732437, -4.2458725424410204e-10, 0.9999937415122986),
  scale: new Vector3(2.592864751815796, 2.921003580093384, 0.9999964237213135)
})
imageFromURL4.addComponentOrReplace(transform104)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform105 = new Transform({
  position: new Vector3(6.865900993347168, 1.859427571296692, 15.507386207580566),
  rotation: new Quaternion(-6.704443230920237e-15, 1, -1.1920927533992653e-7, 2.3841855067985307e-7),
  scale: new Vector3(5.016141414642334, 2.515864133834839, 1.0000001192092896)
})
imageFromURL6.addComponentOrReplace(transform105)

const wallPlainNavy9 = new Entity('wallPlainNavy9')
engine.addEntity(wallPlainNavy9)
wallPlainNavy9.setParent(_scene)
wallPlainNavy9.addComponentOrReplace(gltfShape4)
const transform106 = new Transform({
  position: new Vector3(10.215067863464355, 1.373443841934204, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.4325692653656006, 0.8949523568153381, 1.2590522766113281)
})
wallPlainNavy9.addComponentOrReplace(transform106)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script6.init(options)
script7.init(options)
script1.spawn(verticalBlackPad, {"distance":7,"speed":11,"autoStart":true,"onReachEnd":[{"entityName":"verticalBlackPad","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalBlackPad","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalBlackPad, channelBus))
script2.spawn(indicatorArrowBlue, {"active":true}, createChannel(channelId, indicatorArrowBlue, channelBus))
script3.spawn(blockFloorLight5, {"startOn":true,"clickable":false}, createChannel(channelId, blockFloorLight5, channelBus))
script3.spawn(blockFloorLight, {"startOn":true,"clickable":false}, createChannel(channelId, blockFloorLight, channelBus))
script3.spawn(blockFloorLight6, {"startOn":true,"clickable":false}, createChannel(channelId, blockFloorLight6, channelBus))
script3.spawn(blockFloorLight7, {"startOn":true,"clickable":false}, createChannel(channelId, blockFloorLight7, channelBus))
script3.spawn(blockFloorLight8, {"startOn":true,"clickable":false}, createChannel(channelId, blockFloorLight8, channelBus))
script3.spawn(blockFloorLight10, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight10, channelBus))
script3.spawn(blockFloorLight13, {"startOn":true,"clickable":false}, createChannel(channelId, blockFloorLight13, channelBus))
script3.spawn(blockFloorLight12, {"startOn":true,"clickable":false}, createChannel(channelId, blockFloorLight12, channelBus))
script3.spawn(blockFloorLight14, {"startOn":true,"clickable":false}, createChannel(channelId, blockFloorLight14, channelBus))
script4.spawn(nftPictureFrame4, {"id":"0","contract":"0x597396adDeFC4e799524a96c2362dA71c9B7D3c2","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script4.spawn(nftPictureFrame5, {"id":"77704","contract":"0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script6.spawn(galleryInfoBlack, {"text":"About\nTête Center for Psychotherapy provides tailored individual treatment across the lifespan. Our clinicians utilize various therapeutic techniques and modalities to address a wide array of clinical issues.","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoBlack, channelBus))
script6.spawn(galleryInfoBlack2, {"text":"MEETING AGENDA 2/12/22\n\n- Go over this weeks to-do list.\n- Create next week's task list.\n- Any other business.\n- Next meeting's agenda.","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoBlack2, channelBus))
script5.spawn(imageFromURL7, {"image":"https://images.squarespace-cdn.com/content/v1/619c3f56dc80a3641d6754ea/103a6793-f938-4b40-a528-d4bdd16bf10e/tete_therapy.png?format=1500w"}, createChannel(channelId, imageFromURL7, channelBus))
script6.spawn(galleryInfoBlack3, {"text":"Urban Standard takes pride \nin ensuring high-quality work. \n\nExtreme attention to detail goes into the team’s project planning process, building, and project execution. \n\nAmplifying inspiration and exceeding expectations is the Urban Standard way.","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoBlack3, channelBus))
script7.spawn(externalLink, {"url":"tetetherapy.com"}, createChannel(channelId, externalLink, channelBus))
script7.spawn(externalLink2, {"url":"https://www.urbanstandard.nyc/"}, createChannel(channelId, externalLink2, channelBus))
script7.spawn(externalLink3, {"url":"https://www.empireisland.miami/"}, createChannel(channelId, externalLink3, channelBus))
script3.spawn(blockFloorLight2, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight2, channelBus))
script3.spawn(blockFloorLight3, {"startOn":true,"clickable":false}, createChannel(channelId, blockFloorLight3, channelBus))
script4.spawn(nftPictureFrame3, {"id":"0","contract":"0x597396adDeFC4e799524a96c2362dA71c9B7D3c2","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script5.spawn(imageFromURL4, {"image":"https://ipfs.io/ipfs/QmVZfgiV95z1NWwxNujuJyzrXTU1xcnWS6A4xMTML489r4?filename=urban-standard-01.jpg"}, createChannel(channelId, imageFromURL4, channelBus))
script5.spawn(imageFromURL6, {"image":"https://ipfs.io/ipfs/QmeSvaDwBPbz18UDffmm6gFg1p9EyjCqXDT6NXe2vMZ5qD?filename=urban-standard-02.jpg"}, createChannel(channelId, imageFromURL6, channelBus))

//Add invisible access wall

let wall = access.createArea({
  transform: {position: new Vector3(7.9,1,4.5), scale: new Vector3(4,6,0.3)},
  debug: false,
  type: access.Type.ADDRESS,
  allowedAddresses: ["0x31D282903f154445724Ea469b884CA452acDcde6", "0xE04b8771d0eC7068079f4c4b5ac4dAAe0795d3dd", "0x2009bc2f674f5f74e51f415a76aa96bc4ede79a5"],
  name: "wall1",
  deniedMessage: "You're not in the guest list"
})