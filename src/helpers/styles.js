const  between = (toNew, fromPrev, toWidth, fromWidth) => {
    toNew = toNew.replace(/\D/g,'');
    fromPrev = fromPrev.replace(/\D/g,'');
    toWidth = toWidth.replace(/\D/g,'');
    fromWidth = fromWidth.replace(/\D/g,'');

    const slope = (toNew - fromPrev) / (toWidth - fromWidth);
    const base = fromPrev - slope * fromWidth;
    console.log(toNew);
  
    return `calc( ${base}px + (100vw * ${slope}) )`
}

export const sizes = {
	phone: '375px',
	pad: '720px',
	mac: '1281px',
	xl: '1620px',
}

export default between;