import { RiEmotionNormalLine, RiGhostLine } from 'react-icons/ri';
import { AiOutlineBug, AiOutlineFire } from 'react-icons/ai';
import { FaRegHandRock } from 'react-icons/fa';
import { GiDragonfly, GiPoisonBottle, GiGroundbreaker, GiRock, GiVibratingShield, GiHighGrass, GiElectric, GiPsychicWaves, GiIceCube, GiSpikedDragonHead, GiFairyWand, GiLightningShadow } from 'react-icons/gi';
import { BiWater } from 'react-icons/bi'
import { CgDarkMode } from 'react-icons/cg'
import { GrStatusUnknownSmall } from 'react-icons/gr'

import { typesPokemons } from '../theme/GlobalVariables';

const {normal, fighting, flying, poison, ground, rock, bug, ghost, steel, fire, water, grass, electric, psychic, ice, dragon, dark, fairy, unknown, shadow} = typesPokemons;

export const pokemonsType = type => {
    switch (type) {
        case normal: 
            return <RiEmotionNormalLine />
        case fighting:
            return <FaRegHandRock color="red" />
        case flying:
            return <GiDragonfly color="blue" />
        case poison:
            return <GiPoisonBottle color="green" />
        case ground:
            return <GiGroundbreaker color="brown" />
        case rock:
            return <GiRock color="gray" />
        case bug:
            return <AiOutlineBug color="green" />
        case ghost:
            return <RiGhostLine color="gray" />
        case steel:
            return <GiVibratingShield color="gray" />
        case fire:
            return <AiOutlineFire color="red" />
        case water:
            return <BiWater color="blue" />
        case grass:
            return <GiHighGrass color="green" />
        case electric:
            return <GiElectric color="blue" />
        case psychic:
            return <GiPsychicWaves color="purple" />
        case ice:
            return <GiIceCube color="blue" />
        case dragon:
            return <GiSpikedDragonHead color="red" />
        case dark:
            return <CgDarkMode color="black" />
        case fairy:
            return <GiFairyWand color="blue" />
        case unknown:
            return <GrStatusUnknownSmall color="gray" />
        case shadow:
            return <GiLightningShadow color="gray" />
    }
}