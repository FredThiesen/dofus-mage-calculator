//1-10
import agi from "./agi.png"
import int from "./int.png"
import forca from "./for.png"
import sor from "./sor.png"
import vi from "./vi.png"
import ini from "./ini.png"
// 2-6
import resEmp from "./res_emp.png"
import resCrit from "./res_cri.png"
import resFogo from "./res_fogo.png"
import resAgua from "./res_agua.png"
import resTerra from "./res_terra.png"
import resAr from "./res_ar.png"
import resNeutro from "./res_neutro.png"
// 2-20
import po from "./po.png"
import armPo from "./arm_po.png"
//2-25
import pod from "./pod.png"
//3-30
import sa from "./sa.png"
//3-9
import prosp from "./prosp.png"
//4-12
import blo from "./blo.png"
import fuga from "./fuga.png"
//5-15
import daFogo from "./da_fogo.png"
import daAgua from "./da_agua.png"
import daTerra from "./da_terra.png"
import daAr from "./da_ar.png"
import daNeutro from "./da_neutro.png"
import daEmp from "./da_emp.png"
import daCri from "./da_cri.png"
import daArm from "./da_arm.png"
//5
import caca from "./caca.png"
//6
import resPorFogo from "./da_fogo.png"
import resPorAgua from "./res_por_agua.png"
import resPorTerra from "./res_por_terra.png"
import resPorAr from "./res_por_ar.png"
import resPorNeutro from "./res_por_neutro.png"
//7-21
import esqPa from "./esq_pm.png"
import esqPm from "./esq_pa.png"
import retPa from "./ret_pa.png"
import retPm from "./ret_pm.png"
//10
import cri from "./cri.png"
import daRef from "./da_ref.png"
//10-30
import cur from "./cur.png"
//20
import da from "./da.png"
//30
import inv from "./inv.png"
//51
import al from "./al.png"
//90
import gaPm from "./ga_pm.png"
//100
import gaPa from "./ga_pa.png"

const elemental = [agi, int, forca, sor, vi, ini]
const resists = [resEmp, resCrit, resAgua, resAr, resFogo, resTerra, resNeutro]
const pot = [po, armPo]
const pods = [pod]
const sabedoria = [sa]
const prospec = [prosp]
const bloqueio = [blo, fuga]
const danos = [daFogo, daAgua, daAr, daArm, daTerra, daNeutro, daEmp, daCri]
const hunt = [caca]
const resistsPor = [resPorAgua, resPorAr, resPorFogo, resPorTerra, resPorNeutro]
const esqRet = [esqPa, esqPm, retPa, retPm]
const criRef = [cri, daRef]
const cura = [cur]
const dano = [da]
const invis = [inv]
const alcance = [al]
const pm = [gaPm]
const pa = [gaPa]
const images = [
	{ name: "elemental", runes: elemental },
	{ name: "resists", runes: resists },
	{ name: "pot", runes: pot },
	{ name: "pods", runes: pods },
	{ name: "sabedoria", runes: sabedoria },
	{ name: "prospec", runes: prospec },
	{ name: "bloqueio", runes: bloqueio },
	{ name: "danos", runes: danos },
	{ name: "hunt", runes: hunt },
	{ name: "resistsPor", runes: resistsPor },
	{ name: "esqRet", runes: esqRet },
	{ name: "criRef", runes: criRef },
	{ name: "cura", runes: cura },
	{ name: "dano", runes: dano },
	{ name: "invis", runes: invis },
	{ name: "alcance", runes: alcance },
	{ name: "pm", runes: pm },
	{ name: "pa", runes: pa },
]
export default images
