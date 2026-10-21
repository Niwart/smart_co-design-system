// Generator for SmartCo-Document.dotx / -sample.docx. Run body inside an async context with readFile, readFileBinary, saveFile.
const {zipSync,strToU8} = await import('https://esm.sh/fflate@0.8.2');
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const W='xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"';
const C={primary:'0065FC',secondary:'43E6A2',a1:'E65C43',a2:'E6D443',n900:'000000',n700:'4D4D4D',n200:'CCCCCC',white:'FFFFFF',pT:'E6F0FF',sT:'D9FAEC',a1T:'FADED9',a2T:'FAF6D9',n50:'F7F9FC'};
const TEXTW=9072;
const rPr=o=>{if(!o)return'';let x='';
 if(o.rStyle)x+=`<w:rStyle w:val="${o.rStyle}"/>`;
 if(o.font)x+=`<w:rFonts w:ascii="${o.font}" w:hAnsi="${o.font}" w:cs="${o.font}"/>`;
 if(o.b!==undefined)x+=o.b?'<w:b/><w:bCs/>':'<w:b w:val="0"/><w:bCs w:val="0"/>';
 if(o.i)x+='<w:i/><w:iCs/>';
 if(o.caps)x+='<w:caps/>';
 if(o.color)x+=`<w:color w:val="${o.color}"/>`;
 if(o.sp!==undefined)x+=`<w:spacing w:val="${o.sp}"/>`;
 if(o.sz)x+=`<w:sz w:val="${o.sz}"/><w:szCs w:val="${o.sz}"/>`;
 if(o.u)x+='<w:u w:val="single"/>';
 if(o.sup)x+='<w:vertAlign w:val="superscript"/>';
 if(o.lang)x+=`<w:lang w:val="${o.lang}"/>`;
 return x?`<w:rPr>${x}</w:rPr>`:''};
const pPr=o=>{if(!o)return'';let x='';
 if(o.style)x+=`<w:pStyle w:val="${o.style}"/>`;
 if(o.keepNext)x+='<w:keepNext/>';
 if(o.keepLines)x+='<w:keepLines/>';
 if(o.pbb!==undefined)x+=o.pbb?'<w:pageBreakBefore/>':'<w:pageBreakBefore w:val="0"/>';
 if(o.num)x+=`<w:numPr><w:ilvl w:val="${o.num[1]}"/><w:numId w:val="${o.num[0]}"/></w:numPr>`;
 if(o.bdrB)x+=`<w:pBdr><w:bottom w:val="single" w:sz="${o.bdrB[0]}" w:space="${o.bdrB[1]}" w:color="${o.bdrB[2]}"/></w:pBdr>`;
 if(o.tabR)x+=`<w:tabs><w:tab w:val="right" w:pos="${o.tabR}"/></w:tabs>`;
 if(o.before!==undefined||o.after!==undefined||o.line){x+='<w:spacing'+(o.before!==undefined?` w:before="${o.before}"`:'')+(o.after!==undefined?` w:after="${o.after}"`:'')+(o.line?` w:line="${o.line}" w:lineRule="auto"`:'')+'/>'}
 if(o.ind)x+=`<w:ind w:left="${o.ind[0]}" w:hanging="${o.ind[1]}"/>`;
 if(o.jc)x+=`<w:jc w:val="${o.jc}"/>`;
 if(o.outline!==undefined)x+=`<w:outlineLvl w:val="${o.outline}"/>`;
 return x?`<w:pPr>${x}</w:pPr>`:''};
const R=(t,o)=>`<w:r>${rPr(o)}<w:t xml:space="preserve">${esc(t)}</w:t></w:r>`;
const P=(style,content,extra={})=>`<w:p>${pPr({style,...extra})}${typeof content==='string'?R(content):content.join('')}</w:p>`;
const fld=(instr,placeholder,o)=>`<w:r>${rPr(o)}<w:fldChar w:fldCharType="begin"/></w:r><w:r>${rPr(o)}<w:instrText xml:space="preserve"> ${esc(instr)} </w:instrText></w:r><w:r>${rPr(o)}<w:fldChar w:fldCharType="separate"/></w:r>${R(placeholder,o)}<w:r>${rPr(o)}<w:fldChar w:fldCharType="end"/></w:r>`;
let pid=1;
const IMG=(rid,cx,cy,name,alt)=>{const id=pid++;return `<w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:docPr id="${id}" name="${name}" descr="${esc(alt)}"/><wp:cNvGraphicFramePr><a:graphicFrameLocks noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic><pic:nvPicPr><pic:cNvPr id="${id}" name="${name}"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="${rid}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>`};
const TC=(w,paras,fill,opt={})=>`<w:tc><w:tcPr><w:tcW w:w="${w}" w:type="dxa"/>${fill?`<w:shd w:val="clear" w:color="auto" w:fill="${fill}"/>`:''}${opt.vc?'<w:vAlign w:val="center"/>':''}</w:tcPr>${paras.join('')}</w:tc>`;
const TBL=(style,widths,rows,opt={})=>`<w:tbl><w:tblPr><w:tblStyle w:val="${style}"/><w:tblW w:w="${opt.w||TEXTW}" w:type="dxa"/><w:tblLayout w:type="fixed"/><w:tblLook w:val="04A0" w:firstRow="${opt.header?1:0}" w:lastRow="0" w:firstColumn="0" w:lastColumn="0" w:noHBand="1" w:noVBand="1"/></w:tblPr><w:tblGrid>${widths.map(w=>`<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid>${rows.map((r,i)=>`<w:tr>${i===0&&opt.header?'<w:trPr><w:tblHeader/></w:trPr>':(opt.h?`<w:trPr><w:trHeight w:val="${opt.h}"/></w:trPr>`:'')}${r}</w:tr>`).join('')}</w:tbl>`;
const ST=(type,id,name,o={})=>`<w:style w:type="${type}"${o.def?' w:default="1"':''} w:styleId="${id}"${o.custom?' w:customStyle="1"':''}><w:name w:val="${name}"/>${o.based?`<w:basedOn w:val="${o.based}"/>`:''}${o.next?`<w:next w:val="${o.next}"/>`:''}<w:uiPriority w:val="${o.pri||1}"/>${o.q!==false?'<w:qFormat/>':''}${pPr(o.p)}${rPr(o.r)}</w:style>`;
const F='Roboto', FS='Roboto SemiBold';
const tblStyle=(id,name,o)=>`<w:style w:type="table" w:customStyle="1" w:styleId="${id}"><w:name w:val="${name}"/><w:basedOn w:val="TableNormal"/><w:uiPriority w:val="1"/><w:qFormat/>${pPr({after:0,line:336})}${rPr({sz:20})}<w:tblPr><w:tblBorders>${o.borders||''}</w:tblBorders><w:tblCellMar><w:top w:w="${o.mt??140}" w:type="dxa"/><w:left w:w="${o.ml??160}" w:type="dxa"/><w:bottom w:w="${o.mt??140}" w:type="dxa"/><w:right w:w="${o.ml??160}" w:type="dxa"/></w:tblCellMar></w:tblPr>${o.fill?`<w:tcPr><w:shd w:val="clear" w:color="auto" w:fill="${o.fill}"/></w:tcPr>`:''}${o.extra||''}</w:style>`;
const bl=(e,c)=>`<w:${e} w:val="single" w:sz="4" w:space="0" w:color="${c}"/>`;
const nob=['top','left','bottom','right','insideH','insideV'].map(e=>`<w:${e} w:val="nil"/>`).join('');
// sizes in half-points: 7pt=14, 9=18, 10=20, 12=24, 16=32, 18=36, 20=40, 28=56, 36=72, 48=96
const styles=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles ${W}><w:docDefaults><w:rPrDefault>${rPr({font:F,color:C.n900,sz:24,lang:'en-GB'})}</w:rPrDefault><w:pPrDefault>${pPr({after:160,line:360})}</w:pPrDefault></w:docDefaults>
${ST('paragraph','Normal','Normal',{def:1,p:{after:160,line:360},r:{font:F,color:C.n900,sz:24}})}
${ST('paragraph','Heading1','heading 1',{based:'Normal',next:'Normal',pri:9,p:{keepNext:1,keepLines:1,pbb:1,bdrB:[36,1,C.primary],before:360,after:360,line:360,outline:0},r:{font:F,b:1,color:C.n900,sz:40}})}
${ST('paragraph','Heading1Numbered','Heading 1 Numbered',{custom:1,based:'Heading1',next:'Normal',pri:9,p:{num:[3,0]}})}
${ST('paragraph','Heading2','heading 2',{based:'Normal',next:'Normal',pri:9,p:{keepNext:1,keepLines:1,before:240,after:120,line:288,outline:1},r:{font:FS,b:0,color:C.n900,sz:36}})}
${ST('paragraph','Heading2Numbered','Heading 2 Numbered',{custom:1,based:'Heading2',next:'Normal',pri:9,p:{num:[3,1]}})}
${ST('paragraph','Heading3','heading 3',{based:'Normal',next:'Normal',pri:9,p:{keepNext:1,keepLines:1,before:160,after:80,line:288,outline:2},r:{font:FS,b:0,color:C.n900,sz:32}})}
${ST('paragraph','CoverTitle','Cover Title',{custom:1,based:'Normal',next:'Normal',p:{keepNext:1,before:0,after:240,line:288},r:{font:F,b:1,color:C.n900,sz:72}})}
${ST('paragraph','Eyebrow','Eyebrow',{custom:1,based:'Normal',next:'Normal',p:{keepNext:1,after:80,line:360},r:{caps:1,color:C.primary,sz:18}})}
${ST('paragraph','CoverDate','Cover Date',{custom:1,based:'Normal',next:'Normal',r:{color:C.primary}})}
${ST('paragraph','AuthorName','Author Name',{custom:1,based:'Normal',next:'AuthorRole',p:{keepNext:1,after:0},r:{color:C.n900}})}
${ST('paragraph','AuthorRole','Author Role',{custom:1,based:'Normal',next:'AuthorContact',p:{keepNext:1,after:40},r:{color:C.primary}})}
${ST('paragraph','AuthorContact','Author Contact',{custom:1,based:'Normal',next:'Normal',p:{after:0,line:336},r:{i:1,color:'404040',sz:18}})}
${ST('paragraph','Caption','caption',{based:'Normal',next:'Normal',pri:35,p:{before:80,after:240,line:336},r:{color:C.n900,sp:2,sz:18}})}
${ST('paragraph','StatText','Stat Text',{custom:1,based:'Normal',next:'StatText',p:{after:0,line:336},r:{color:C.n900,sz:20}})}
${ST('paragraph','StatTextInverse','Stat Text Inverse',{custom:1,based:'StatText',next:'StatTextInverse',r:{color:C.white}})}
${ST('paragraph','BodyCompact','Body Compact',{custom:1,based:'Normal',next:'BodyCompact',p:{after:80,line:336},r:{sz:20}})}
${ST('paragraph','CardLabel','Card Label',{custom:1,based:'BodyCompact',next:'TableText',p:{after:0},r:{font:FS,color:C.n900}})}
${ST('paragraph','CardLabelInverse','Card Label Inverse',{custom:1,based:'CardLabel',next:'TableText',r:{color:C.white}})}
${ST('paragraph','TableText','Table Text',{custom:1,based:'BodyCompact',next:'TableText',p:{after:0}})}
${ST('paragraph','TableHeader','Table Header',{custom:1,based:'TableText',next:'TableText',r:{font:FS,color:C.white}})}
${ST('paragraph','KeyNumber','Key Number',{custom:1,based:'Normal',next:'StatText',p:{keepNext:1,before:0,after:80,line:240},r:{b:1,color:C.n900,sp:-11,sz:56}})}
${ST('paragraph','KeyNumberInverse','Key Number Inverse',{custom:1,based:'KeyNumber',next:'StatTextInverse',r:{color:C.white}})}
${ST('paragraph','ListBullet','List Bullet',{based:'Normal',pri:36,p:{num:[1,0],after:80}})}
${ST('paragraph','ListBullet2','List Bullet 2',{based:'Normal',pri:36,p:{num:[1,1],after:40}})}
${ST('paragraph','ListNumber','List Number',{based:'Normal',pri:36,p:{num:[2,0],after:80}})}
${ST('paragraph','EndnoteEntry','Endnote Entry',{custom:1,based:'Normal',p:{num:[4,0],after:60,line:336},r:{sz:18,sp:2}})}
${ST('paragraph','TOCHeading','TOC Heading',{based:'Heading1',next:'Normal',pri:39,p:{outline:9}})}
${ST('paragraph','TOC1','toc 1',{based:'Normal',next:'Normal',pri:39,p:{tabR:TEXTW,before:120,after:60},r:{font:FS}})}
${ST('paragraph','TOC2','toc 2',{based:'Normal',next:'Normal',pri:39,p:{tabR:TEXTW,after:60,ind:[340,0]}})}
${ST('paragraph','Header','header',{based:'Normal',pri:99,q:false,p:{tabR:TEXTW,after:0,line:240},r:{sz:14}})}
${ST('paragraph','Footer','footer',{based:'Normal',pri:99,q:false,p:{tabR:TEXTW,after:0,line:240},r:{sz:18,sp:2}})}
<w:style w:type="paragraph" w:customStyle="1" w:styleId="CalloutSpacer"><w:name w:val="Callout Spacer"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:uiPriority w:val="1"/><w:qFormat/><w:pPr><w:spacing w:before="0" w:after="240" w:line="20" w:lineRule="exact"/></w:pPr><w:rPr><w:sz w:val="2"/><w:szCs w:val="2"/></w:rPr></w:style>
${ST('character','DefaultParagraphFont','Default Paragraph Font',{def:1,pri:1,q:false})}
${ST('character','Strong','Strong',{pri:22,r:{font:FS,color:C.n900}})}
${ST('character','CalloutLead','Callout Lead',{custom:1,r:{font:F,b:1,color:C.n900}})}
${ST('character','CalloutQuote','Callout Quote',{custom:1,r:{font:F,b:1,color:C.n900}})}
${ST('character','Hyperlink','Hyperlink',{pri:99,q:false,r:{color:C.primary,u:1}})}
${ST('character','FollowedHyperlink','FollowedHyperlink',{pri:99,q:false,r:{color:C.n900,u:1}})}
${ST('character','EndnoteReference','endnote reference',{pri:99,q:false,r:{sup:1}})}
<w:style w:type="table" w:default="1" w:styleId="TableNormal"><w:name w:val="Normal Table"/><w:uiPriority w:val="99"/><w:semiHidden/><w:unhideWhenUsed/><w:tblPr><w:tblInd w:w="0" w:type="dxa"/><w:tblCellMar><w:top w:w="0" w:type="dxa"/><w:left w:w="108" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/><w:right w:w="108" w:type="dxa"/></w:tblCellMar></w:tblPr></w:style>
${tblStyle('SmartCoTable','SmartCo Table',{borders:bl('top',C.n200)+bl('bottom',C.n200)+bl('insideH',C.n200),extra:`<w:tblStylePr w:type="firstRow">${rPr({font:FS,color:C.white})}<w:trPr><w:tblHeader/></w:trPr><w:tcPr><w:shd w:val="clear" w:color="auto" w:fill="${C.primary}"/><w:vAlign w:val="center"/></w:tcPr></w:tblStylePr><w:tblStylePr w:type="band2Horz"><w:tcPr><w:shd w:val="clear" w:color="auto" w:fill="${C.n50}"/></w:tcPr></w:tblStylePr>`})}
${[['SmartCoCallout','SmartCo Callout',C.primary,C.pT],['SmartCoCalloutAccent1','SmartCo Callout Accent 1',C.a1,C.a1T],['SmartCoCalloutAccent2','SmartCo Callout Accent 2',C.a2,C.a2T]].map(([id,n,c,f])=>`<w:style w:type="table" w:customStyle="1" w:styleId="${id}"><w:name w:val="${n}"/><w:basedOn w:val="TableNormal"/><w:uiPriority w:val="1"/><w:qFormat/><w:rPr><w:color w:val="000000"/></w:rPr><w:tblPr><w:tblBorders><w:top w:val="nil"/><w:left w:val="single" w:sz="24" w:space="0" w:color="${c}"/><w:bottom w:val="nil"/><w:right w:val="nil"/><w:insideH w:val="nil"/><w:insideV w:val="nil"/></w:tblBorders><w:tblCellMar><w:top w:w="240" w:type="dxa"/><w:left w:w="280" w:type="dxa"/><w:bottom w:w="240" w:type="dxa"/><w:right w:w="280" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tcPr><w:shd w:val="clear" w:color="auto" w:fill="${f}"/></w:tcPr></w:style>`).join('')}
${tblStyle('SmartCoGrid','SmartCo Layout Grid',{borders:nob,mt:140,ml:160})}
${tblStyle('SmartCoStat','SmartCo Stat',{borders:nob,fill:C.primary,mt:240,ml:280})}
${tblStyle('SmartCoStatAccent','SmartCo Stat Accent',{borders:nob,fill:C.a2,mt:240,ml:280})}
</w:styles>`;
const lvl=(i,fmt,text,left,o={})=>`<w:lvl w:ilvl="${i}"><w:start w:val="1"/><w:numFmt w:val="${fmt}"/>${o.pStyle?`<w:pStyle w:val="${o.pStyle}"/>`:''}${o.suff?`<w:suff w:val="${o.suff}"/>`:''}<w:lvlText w:val="${text}"/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="${left}" w:hanging="${o.hang??340}"/></w:pPr>${rPr(o.r)}</w:lvl>`;
const numbering=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:numbering ${W}>
<w:abstractNum w:abstractNumId="0"><w:multiLevelType w:val="hybridMultilevel"/>${lvl(0,'bullet','•',340,{r:{font:F,color:C.primary}})}${lvl(1,'bullet','–',680,{r:{font:F,color:C.n900}})}</w:abstractNum>
<w:abstractNum w:abstractNumId="1"><w:multiLevelType w:val="hybridMultilevel"/>${lvl(0,'decimal','%1.',340,{r:{color:C.n900}})}${lvl(1,'lowerLetter','%2.',680)}</w:abstractNum>
<w:abstractNum w:abstractNumId="2"><w:multiLevelType w:val="multilevel"/>${lvl(0,'decimal','%1.',0,{pStyle:'Heading1Numbered',suff:'space',hang:0})}${lvl(1,'lowerLetter','%1%2.',0,{pStyle:'Heading2Numbered',suff:'space',hang:0})}</w:abstractNum>
<w:abstractNum w:abstractNumId="3"><w:multiLevelType w:val="singleLevel"/>${lvl(0,'decimal','%1.',340)}</w:abstractNum>
<w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num><w:num w:numId="2"><w:abstractNumId w:val="1"/></w:num><w:num w:numId="3"><w:abstractNumId w:val="2"/></w:num><w:num w:numId="4"><w:abstractNumId w:val="3"/></w:num>
</w:numbering>`;
let theme=await readFile('scratch/theme1.xml');
for (const [s,h] of [['dk1',C.n900],['lt1',C.white],['dk2',C.n700],['lt2',C.white],['accent1',C.primary],['accent2',C.secondary],['accent3',C.a1],['accent4',C.a2],['accent5',C.n700],['accent6',C.n200],['hlink',C.primary],['folHlink',C.n700]]) {
  const a=theme.indexOf(`<a:${s}>`), b=theme.indexOf(`</a:${s}>`);
  if(a>=0&&b>a) theme=theme.slice(0,a)+`<a:${s}><a:srgbClr val="${h}"/></a:${s}>`+theme.slice(b+s.length+5);
}
theme=theme.replace('typeface="Roboto Bold"','typeface="Roboto"');
const MM=36000;
const logoCover=IMG('rIdLogo',50*MM,Math.round(50*MM*202/804),'SmartCo logo','SmartCo');
const CM=360000;
const PHOTO=alt=>IMG('rIdPhoto',Math.round(2.25*360000),Math.round(2.25*360000),'Author photo',alt).replace('prst="rect"','prst="ellipse"');
const hex=(()=>{const id=pid++;const cx=Math.round(8*CM),cy=Math.round(7.53*CM);return `<w:r><w:drawing><wp:anchor distT="0" distB="0" distL="0" distR="0" simplePos="0" relativeHeight="251658254" behindDoc="1" locked="1" layoutInCell="1" allowOverlap="1"><wp:simplePos x="0" y="0"/><wp:positionH relativeFrom="page"><wp:posOffset>${Math.round(12.97*CM)}</wp:posOffset></wp:positionH><wp:positionV relativeFrom="page"><wp:posOffset>${Math.round(22.13*CM)}</wp:posOffset></wp:positionV><wp:extent cx="${cx}" cy="${cy}"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:wrapNone/><wp:docPr id="${id}" name="Brand hexagons" descr="SmartCo hexagon brand graphic"/><wp:cNvGraphicFramePr><a:graphicFrameLocks noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic><pic:nvPicPr><pic:cNvPr id="${id}" name="Brand hexagons"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="rIdHex"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:anchor></w:drawing></w:r>`})();
const col3=[3024,3024,3024], col2=[4536,4536];
const quote=[P('TableText','[Description, max 30 words.]',{after:80}),P('TableText',[R('“[Short quote.]”',{rStyle:'Strong'})])];
const rowT=(a,b,c)=>TC(col3[0],[P('TableText',[R(a,{rStyle:'Strong'})])])+TC(col3[1],[P('TableText',b)])+TC(col3[2],[P('TableText',c,{jc:'right'})]);
const cap=(n,t)=>P('Caption',[R('Figure '),fld('SEQ Figure \\* ARABIC',String(n)),R('. '+t)]);
const mkBody=SAMPLE=>[
P('Normal',[logoCover],{after:0}),
P('Eyebrow','White paper',{before:3200}),
P('CoverTitle','[Title of the paper in sentence case]'),
P('Normal','[One-line subtitle that states the argument]',{after:320}),
P('Caption',[hex,R('By [Author name] and [Author name]')],{before:0,after:0}),
P('CoverDate','[Month YYYY]',{before:160}),
P('TOCHeading','Table of contents'),
P('Normal',[fld('TOC \\o "1-2" \\h \\z \\u','Right-click and choose Update Field to build the table of contents.')]),
P('Heading1','Foreword'),
P('Normal','[Open with the context in two or three short declarative sentences. Plain language. No exclamation marks.]'),
P('Normal','[State why this paper matters now and what the reader will be able to do after reading it.]'),
P('Normal',[R('[Author name]',{rStyle:'Strong'})],{after:0}),
P('Caption','[Role, Company]',{before:0}),
P('Heading1','Executive summary'),
P('Normal','[Summarise the argument in one page. Lead with the finding, then the evidence, then the recommendation.]'),
TBL('SmartCoCallout',[TEXTW],[TC(TEXTW,[P('Normal',[R('The argument in brief',{rStyle:'CalloutLead'})],{after:80}),P('Normal','[One or two sentences that the reader should remember if they read nothing else.]',{after:0})])]),
P('CalloutSpacer',''),
`<w:tbl><w:tblPr><w:tblW w:w="${TEXTW}" w:type="dxa"/><w:tblLayout w:type="fixed"/><w:tblCellMar><w:left w:w="0" w:type="dxa"/><w:right w:w="0" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid><w:gridCol w:w="4416"/><w:gridCol w:w="240"/><w:gridCol w:w="4416"/></w:tblGrid><w:tr>`+TC(4416,[TBL('SmartCoStat',[4416],[TC(4416,[P('KeyNumberInverse','70%'),P('StatTextInverse','[of the audience say … — Source name, year]')])],{w:4416}),P('CalloutSpacer','',{after:0})])+TC(240,[P('CalloutSpacer','',{after:0})])+TC(4416,[TBL('SmartCoStatAccent',[4416],[TC(4416,[P('KeyNumber','63%'),P('StatText','[of organisations … — Source name, year]')])],{w:4416}),P('CalloutSpacer','',{after:0})])+`</w:tr></w:tbl>`,
P('CalloutSpacer',''),
P('Caption','[Stat blocks: primary (default) or accent-2 (the page’s one accent).]'),
P('Heading1Numbered','[Section title in sentence case]'),
P('Normal',[R('[Body text, 12 pt, left-aligned. Cite sources with an endnote number after punctuation.'),R('1',{rStyle:'EndnoteReference'}),R(']')]),
P('Heading2Numbered','[Sub-section title]'),
P('Caption','By [Author name], [role]',{before:0}),
P('Normal','[Use bullets for parallel points only. Keep each to two lines.]'),
P('ListBullet','[First point]'),P('ListBullet','[Second point]'),P('ListBullet2','[Supporting detail]'),P('ListBullet','[Third point]'),
P('Normal','[Use a numbered list for sequences or conditions.]',{before:160}),
P('ListNumber','[Step one]'),P('ListNumber','[Step two]'),P('ListNumber','[Step three]'),
P('Heading3','[Table title]',{before:320}),
TBL('SmartCoTable',col3,[TC(col3[0],[P('TableHeader','[Category]')])+TC(col3[1],[P('TableHeader','[Column]')])+TC(col3[2],[P('TableHeader','[Value]',{jc:'right'})]),rowT('[Row label]','[Description]','4.2M'),rowT('[Row label]','[Description]','3.1M'),rowT('[Row label]','[Description]','850K')],{header:1}),
cap(1,'[Sentence explaining what the reader should see.]'),
TBL('SmartCoCalloutAccent1',[TEXTW],[TC(TEXTW,[P('Normal',[R('What this means',{rStyle:'CalloutLead'})],{after:80}),P('Normal','[Turn the section into one question or action for the reader.]',{after:0})])]),
P('CalloutSpacer',''),
P('Heading1Numbered','[Section title]'),
P('Normal','[Introduce the figure in one sentence.]'),
P('Heading3','[Figure title]'),
P('BodyCompact','[Figure subtitle — one line.]'),
TBL('SmartCoGrid',[TEXTW],[TC(TEXTW,[P('BodyCompact','[Insert chart or image here — In line with text, full column width (160 mm). Roboto, core colors, labels in neutral-900/700. Set Alt Text.]',{after:0})],C.n50,{vc:1})],{h:3400}),
cap(2,'[Caption.]'),
P('Heading3','[Stage cards title]',{before:320}),
TBL('SmartCoGrid',col3,[TC(col3[0],[P('CardLabelInverse','Stage 1 · [Name]')],C.primary)+TC(col3[1],[P('CardLabel','Stage 2 · [Name]')],C.a1)+TC(col3[2],[P('CardLabel','Stage 3 · [Name]')],C.a2),TC(col3[0],quote,C.pT)+TC(col3[1],quote,C.a1T)+TC(col3[2],quote,C.a2T)]),
cap(3,'[Caption.] Stage color coding is an approved exception to the one-accent rule.'),
TBL('SmartCoCalloutAccent2',[TEXTW],[TC(TEXTW,[P('Normal',[R('The takeaway',{rStyle:'CalloutLead'})],{after:80}),P('Normal',[R('[One sentence the reader should act on, with a quote: '),R('“[quoted phrase]”',{rStyle:'CalloutQuote'}),R('.]')],{after:0})])]),
P('CalloutSpacer',''),
TBL('SmartCoCallout',[TEXTW],[TC(TEXTW,[P('Normal','[Callout without a title: copy only, no bold first line. Use when there is no separate first line of up to 5 words.]',{after:0})])]),
P('CalloutSpacer',''),
P('Heading2','Conclusion'),
P('Normal','[Close with the choice the reader has to make. One paragraph.]'),
P('Heading1','Appendix'),
P('Heading2','Definitions'),
P('Normal',[R('[Term]. ',{rStyle:'Strong'}),R('[Definition in one sentence.]')]),
P('Normal',[R('[Term]. ',{rStyle:'Strong'}),R('[Definition in one sentence.]')]),
P('Heading1','Endnotes'),
P('EndnoteEntry','[Publisher], “[Title]”, [Day Month Year].'),P('EndnoteEntry','[Publisher], “[Title]”, [Day Month Year].'),P('EndnoteEntry','[Publisher], “[Title]”, [Day Month Year].'),
...(SAMPLE?SAMPLE_TAIL:PLACEHOLDER_TAIL),
P('Normal',[IMG('rIdLogo',40*MM,Math.round(40*MM*202/804),'SmartCo logo back','SmartCo')],{pbb:1,before:10000,after:120}),
P('Caption','© 2026 SmartCo Consulting Ltd. All rights reserved.',{before:0,after:0}),
].join('\n');
const SAMPLE_TAIL=[P('Heading1','SmartCo'),
P('Normal','SmartCo is a digital transformation partner, enabling global organisations to scale AI and data, de-risk M&A, optimise cloud and ERP estates and deliver complex technology programmes with confidence.'),
P('Normal',[R('smart-co.co.uk',{rStyle:'Hyperlink'})]),
P('Heading3','Contact the authors'),
P('Normal','If you would like to discuss this white paper, please contact the authors.'),
...[['Callum Campbell','SmartCo, Head of Clients and Growth','callum.campbell@smart-co.co.uk','linkedin.com/in/callum-campbell-consulting'],['Sahar Khan','Transformation and AI expert in financial services','sahar_khan@live.co.uk','linkedin.com/in/sahar-k-88a0091']].map(([n,r,e,l])=>TBL('SmartCoGrid',[1600,TEXTW-1600],[TC(1600,[P('Normal',[PHOTO('Photo of '+n)],{after:0,line:240})],null,{vc:1})+TC(TEXTW-1600,[P('AuthorName',n),P('AuthorRole',r),P('AuthorContact',e+'\u2003\u2003'+l)],null,{vc:1})])+P('CalloutSpacer','')),
P('Heading1','About the authors'),
P('Normal',[R('Callum Campbell',{rStyle:'Strong'}),R(' leads on clients and growth at SmartCo, working closely with organisations to shape and deliver transformation outcomes. Alongside this, he plays a key role in driving SmartCo’s AI agenda, specialising in how AI can be applied practically to improve delivery and performance.')]),
P('Normal',[R('Sahar Khan',{rStyle:'Strong'}),R(' has been a Transformation and AI expert for several global financial groups. Her practitioner perspective in this paper draws on large-scale change assessment and delivery work across global public-sector and financial-services programmes.')])];
const PLACEHOLDER_TAIL=[P('Heading1','SmartCo'),
P('Normal','[SmartCo boilerplate — what the company does, for whom, in two or three sentences.]'),
P('Normal',[R('[smart-co.co.uk]',{rStyle:'Hyperlink'})]),
P('Heading3','Contact the authors'),
P('Normal','[One line inviting the reader to contact the authors.]'),
...[1,2].map(()=>TBL('SmartCoGrid',[1600,TEXTW-1600],[TC(1600,[P('Normal',[PHOTO('Author photo placeholder')],{after:0,line:240})],null,{vc:1})+TC(TEXTW-1600,[P('AuthorName','[Author name]'),P('AuthorRole','[Company, Job title]'),P('AuthorContact','[email]\u2003\u2003[linkedin.com/in/…]')],null,{vc:1})])+P('CalloutSpacer','')),
P('Heading1','About the authors'),
P('Normal',[R('[Author name]',{rStyle:'Strong'}),R(' [one paragraph biography, third person, ≤ 60 words].')]),
P('Normal',[R('[Author name]',{rStyle:'Strong'}),R(' [one paragraph biography, third person, ≤ 60 words].')])];
const sect=`<w:sectPr><w:headerReference w:type="default" r:id="rIdH1"/><w:footerReference w:type="default" r:id="rIdF1"/><w:headerReference w:type="first" r:id="rIdH2"/><w:footerReference w:type="first" r:id="rIdF2"/><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1701" w:right="1418" w:bottom="1701" w:left="1418" w:header="397" w:footer="397" w:gutter="0"/><w:cols w:space="708"/><w:titlePg/><w:docGrid w:linePitch="360"/></w:sectPr>`;
const mkDoc=sample=>`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:document ${W}><w:body>${mkBody(sample)}${sect}</w:body></w:document>`;
const header1=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:hdr ${W}><w:p>${pPr({style:'Header'})}${IMG('rIdLogo',30*MM,Math.round(30*MM*202/804),'Header logo','SmartCo')}<w:r><w:tab/></w:r>${fld('PAGE','2',{color:C.n900})}</w:p></w:hdr>`;
const footer1=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:ftr ${W}>${P('Footer','[Author] & [Author]  ·  [Month YYYY]')}</w:ftr>`;
const header2=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:hdr ${W}><w:p>${pPr({style:'Header'})}</w:p></w:hdr>`;
const footer2=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:ftr ${W}><w:p>${pPr({style:'Footer'})}</w:p></w:ftr>`;
const settings=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:settings ${W}><w:embedTrueTypeFonts/><w:defaultTabStop w:val="708"/><w:characterSpacingControl w:val="doNotCompress"/><w:updateFields w:val="true"/><w:compat><w:compatSetting w:name="compatibilityMode" w:uri="http://schemas.microsoft.com/office/word" w:val="15"/></w:compat><w:themeFontLang w:val="en-GB"/><w:clrSchemeMapping w:bg1="light1" w:t1="dark1" w:bg2="light2" w:t2="dark2" w:accent1="accent1" w:accent2="accent2" w:accent3="accent3" w:accent4="accent4" w:accent5="accent5" w:accent6="accent6" w:hyperlink="hyperlink" w:followedHyperlink="followedHyperlink"/></w:settings>`;
const RT='http://schemas.openxmlformats.org/officeDocument/2006/relationships';
const rel=(id,t,tg)=>`<Relationship Id="${id}" Type="${t}" Target="${tg}"/>`;
const RS=x=>`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${x}</Relationships>`;
const docRels=RS(rel('rIdS',RT+'/styles','styles.xml')+rel('rIdSet',RT+'/settings','settings.xml')+rel('rIdN',RT+'/numbering','numbering.xml')+rel('rIdT',RT+'/theme','theme/theme1.xml')+rel('rIdH1',RT+'/header','header1.xml')+rel('rIdF1',RT+'/footer','footer1.xml')+rel('rIdH2',RT+'/header','header2.xml')+rel('rIdF2',RT+'/footer','footer2.xml')+rel('rIdLogo',RT+'/image','media/logo-color.png')+rel('rIdHex',RT+'/image','media/brand-hexagons.png')+rel('rIdFT',RT+'/fontTable','fontTable.xml')+rel('rIdPhoto',RT+'/image','media/author-photo.png'));
const hdrRels=RS(rel('rIdLogo',RT+'/image','media/logo-color.png'));
const rootRels=RS(rel('rId1',RT+'/officeDocument','word/document.xml')+rel('rId2','http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties','docProps/core.xml')+rel('rId3',RT+'/extended-properties','docProps/app.xml'));
const core=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>SmartCo Document Template</dc:title><dc:creator>SmartCo</dc:creator><dcterms:created xsi:type="dcterms:W3CDTF">2026-09-30T00:00:00Z</dcterms:created></cp:coreProperties>`;
const app=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"><Application>Microsoft Office Word</Application><Company>SmartCo</Company></Properties>`;
const WP='application/vnd.openxmlformats-officedocument.wordprocessingml.';
const ov=(p,t)=>`<Override PartName="${p}" ContentType="${t}"/>`;
const ct=main=>`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Default Extension="png" ContentType="image/png"/><Default Extension="odttf" ContentType="application/vnd.openxmlformats-officedocument.obfuscatedFont"/>${ov('/word/document.xml',WP+main+'.main+xml')+ov('/word/styles.xml',WP+'styles+xml')+ov('/word/fontTable.xml',WP+'fontTable+xml')+ov('/word/settings.xml',WP+'settings+xml')+ov('/word/numbering.xml',WP+'numbering+xml')+ov('/word/theme/theme1.xml','application/vnd.openxmlformats-officedocument.theme+xml')+ov('/word/header1.xml',WP+'header+xml')+ov('/word/footer1.xml',WP+'footer+xml')+ov('/word/header2.xml',WP+'header+xml')+ov('/word/footer2.xml',WP+'footer+xml')+ov('/docProps/core.xml','application/vnd.openxmlformats-package.core-properties+xml')+ov('/docProps/app.xml','application/vnd.openxmlformats-officedocument.extended-properties+xml')}</Types>`;
for(const [k,v] of Object.entries({styles,numbering,document:mkDoc(true),header1,footer1,settings,theme})){const d=new DOMParser().parseFromString(v,'application/xml');if(d.getElementsByTagName('parsererror').length)throw new Error('XML error in '+k);}
const logoPng=new Uint8Array(await (await readFileBinary('assets/logo-color.png')).arrayBuffer());
const photoPng=new Uint8Array(await (await readFileBinary('assets/author-photo-placeholder.png')).arrayBuffer());
const hexPng=new Uint8Array(await (await readFileBinary('assets/brand-hexagons.png')).arrayBuffer());
// Embedded fonts (obfuscated per ECMA-376 §17.8.1: first 32 bytes XOR with GUID key in reversed byte order)
const FONTS=[['Roboto','embedRegular','Roboto-Regular.ttf'],['Roboto','embedBold','Roboto-Bold.ttf'],['Roboto','embedItalic','Roboto-Italic.ttf'],['Roboto','embedBoldItalic','Roboto-BoldItalic.ttf'],['Roboto SemiBold','embedRegular','Roboto-SemiBold.ttf'],['Roboto SemiBold','embedItalic','Roboto-SemiBoldItalic.ttf']];
const fontParts={},fontEls={};let fontRels='';
for(let i=0;i<FONTS.length;i++){const [fam,tag,file]=FONTS[i];
 const guid='{5C0A10'+i+'0-1E2D-4C3B-8A79-6B5C4D3E2F1'+i+'}';
 const hx=guid.replace(/[{}-]/g,''); const g=[];for(let j=0;j<16;j++)g.push(parseInt(hx.substr(j*2,2),16));
 const key=g.slice().reverse();
 const data=new Uint8Array(await (await readFileBinary('fonts/'+file)).arrayBuffer());
 for(let j=0;j<32;j++)data[j]^=key[j%16];
 fontParts['word/fonts/font'+(i+1)+'.odttf']=data;
 fontRels+=rel('rIdFont'+(i+1),RT+'/font','fonts/font'+(i+1)+'.odttf');
 (fontEls[fam]=fontEls[fam]||[]).push('<w:'+tag+' r:id="rIdFont'+(i+1)+'" w:fontKey="'+guid+'"/>');}
const fontTable='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:fonts '+W+'>'+Object.entries(fontEls).map(([n,e])=>'<w:font w:name="'+n+'"><w:charset w:val="00"/><w:family w:val="auto"/><w:pitch w:val="variable"/>'+e.join('')+'</w:font>').join('')+'</w:fonts>';
fontParts['word/fontTable.xml']=strToU8(fontTable);
fontParts['word/_rels/fontTable.xml.rels']=strToU8(RS(fontRels));
const s=strToU8;
const build=(main,sample)=>new Blob([zipSync({'[Content_Types].xml':s(ct(main)),'_rels/.rels':s(rootRels),'docProps/core.xml':s(core),'docProps/app.xml':s(app),'word/document.xml':s(mkDoc(sample)),'word/styles.xml':s(styles),'word/numbering.xml':s(numbering),'word/settings.xml':s(settings),'word/theme/theme1.xml':s(theme),'word/header1.xml':s(header1),'word/footer1.xml':s(footer1),'word/header2.xml':s(header2),'word/footer2.xml':s(footer2),'word/_rels/document.xml.rels':s(docRels),'word/_rels/header1.xml.rels':s(hdrRels),'word/media/logo-color.png':[logoPng,{level:0}],'word/media/brand-hexagons.png':[hexPng,{level:0}],'word/media/author-photo.png':[photoPng,{level:0}],...fontParts},{level:6})]);
await saveFile('templates/document/SmartCo-Document.dotx',build('template',false));
await saveFile('templates/document/SmartCo-Document-sample.docx',build('document',true));
