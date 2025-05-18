import{A as $e,B as Me,C as Ve,j as fe,k as we,l as be,r as ve,s as ye,t as _e,u as Ce,v as ke,w as Se,x as Te}from"./chunk-LLDVFUVW.js";import{a as E}from"./chunk-NOH3PDMC.js";import{f as me}from"./chunk-L5GY555I.js";import{Aa as ne,Da as se,Ea as le,Ga as ce,Ha as ge,Ja as de,Oa as ue,Ta as he,Ua as pe,ia as $,ma as M,qa as V,ra as x,xa as ae}from"./chunk-KKM2KR3K.js";import{Bb as C,Cb as Y,Da as c,Ea as w,Ib as k,Ka as F,Kb as Z,O as B,Oa as b,P as A,Pa as z,Q as R,Sa as G,Ua as q,Ub as ee,V as J,Va as h,Yb as S,Zb as te,a as L,ab as v,b as N,ba as d,bb as g,ca as u,eb as U,fa as P,fb as H,gb as W,ka as Q,kb as n,lb as s,mb as O,mc as ie,pb as K,pc as oe,qb as m,qc as re,sb as p,sc as T,tb as f,wb as D,xb as X,yb as y,zb as _}from"./chunk-2HC2GL3M.js";var Pe=["handle"],Fe=["input"],Oe=e=>({checked:e});function De(e,a){e&1&&K(0)}function Le(e,a){if(e&1&&h(0,De,1,0,"ng-container",4),e&2){let t=f();g("ngTemplateOutlet",t.handleTemplate||t._handleTemplate)("ngTemplateOutletContext",Z(2,Oe,t.checked()))}}var Ne=({dt:e})=>`
.p-toggleswitch {
    display: inline-block;
    width: ${e("toggleswitch.width")};
    height: ${e("toggleswitch.height")};
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${e("toggleswitch.border.radius")};
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: ${e("toggleswitch.border.width")};
    border-style: solid;
    border-color: ${e("toggleswitch.border.color")};
    background: ${e("toggleswitch.background")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, border-color ${e("toggleswitch.transition.duration")}, outline-color ${e("toggleswitch.transition.duration")}, box-shadow ${e("toggleswitch.transition.duration")};
    border-radius: ${e("toggleswitch.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("toggleswitch.shadow")};
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e("toggleswitch.handle.background")};
    color: ${e("toggleswitch.handle.color")};
    width: ${e("toggleswitch.handle.size")};
    height: ${e("toggleswitch.handle.size")};
    inset-inline-start: ${e("toggleswitch.gap")};
    margin-block-start: calc(-1 * calc(${e("toggleswitch.handle.size")} / 2));
    border-radius: ${e("toggleswitch.handle.border.radius")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, inset-inline-start ${e("toggleswitch.slide.duration")}, box-shadow ${e("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.background")};
    border-color: ${e("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.background")};
    color: ${e("toggleswitch.handle.checked.color")};
    inset-inline-start: calc(${e("toggleswitch.width")} - calc(${e("toggleswitch.handle.size")} + ${e("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${e("toggleswitch.hover.background")};
    border-color: ${e("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.hover.background")};
    color: ${e("toggleswitch.handle.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.hover.background")};
    border-color: ${e("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.hover.background")};
    color: ${e("toggleswitch.handle.checked.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: ${e("toggleswitch.focus.ring.shadow")};
    outline: ${e("toggleswitch.focus.ring.width")} ${e("toggleswitch.focus.ring.style")} ${e("toggleswitch.focus.ring.color")};
    outline-offset: ${e("toggleswitch.focus.ring.offset")};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: ${e("toggleswitch.disabled.background")};
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.disabled.background")};
}

/* For PrimeNG */

p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}`,Be={root:{position:"relative"}},Ae={root:({instance:e})=>({"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},xe=(()=>{class e extends ae{name="toggleswitch";theme=Ne;classes=Ae;inlineStyles=Be;static \u0275fac=(()=>{let t;return function(i){return(t||(t=P(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var Re={provide:ne,useExisting:B(()=>j),multi:!0},j=(()=>{class e extends ge{style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;autofocus;onChange=new Q;input;handleTemplate;_handleTemplate;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=J(xe);templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"handle":this._handleTemplate=t.template;break;default:this._handleTemplate=t.template;break}})}onClick(t){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:t,checked:this.modelValue}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(t){this.modelValue=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=(()=>{let t;return function(i){return(t||(t=P(e)))(i||e)}})();static \u0275cmp=b({type:e,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(o,i,r){if(o&1&&(D(r,Pe,4),D(r,V,4)),o&2){let l;y(l=_())&&(i.handleTemplate=l.first),y(l=_())&&(i.templates=l)}},viewQuery:function(o,i){if(o&1&&X(Fe,5),o&2){let r;y(r=_())&&(i.input=r.first)}},inputs:{style:"style",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",te],inputId:"inputId",name:"name",disabled:[2,"disabled","disabled",S],readonly:[2,"readonly","readonly",S],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",S]},outputs:{onChange:"onChange"},features:[k([Re,xe]),q,G],decls:6,vars:23,consts:[["input",""],[3,"click","ngClass","ngStyle"],["type","checkbox","role","switch",3,"focus","blur","ngClass","checked","disabled","pAutoFocus"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,i){if(o&1){let r=m();n(0,"div",1),p("click",function(je){return d(r),u(i.onClick(je))}),n(1,"input",2,0),p("focus",function(){return d(r),u(i.onFocus())})("blur",function(){return d(r),u(i.onBlur())}),s(),n(3,"span",3)(4,"div",3),h(5,Le,1,4,"ng-container"),s()()()}o&2&&(U(i.sx("root")),H(i.styleClass),g("ngClass",i.cx("root"))("ngStyle",i.style),v("data-pc-name","toggleswitch")("data-pc-section","root"),c(),g("ngClass",i.cx("input"))("checked",i.checked())("disabled",i.disabled)("pAutoFocus",i.autofocus),v("id",i.inputId)("aria-checked",i.checked())("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("name",i.name)("tabindex",i.tabindex)("data-pc-section","hiddenInput"),c(2),g("ngClass",i.cx("slider")),v("data-pc-section","slider"),c(),g("ngClass",i.cx("handle")),c(),W(i.handleTemplate||i._handleTemplate?5:-1))},dependencies:[T,ie,re,oe,ue,x],encapsulation:2,changeDetection:0})}return e})(),Ee=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=z({type:e});static \u0275inj=R({imports:[j,x,x]})}return e})();function Qe(e,a){if(e&1){let t=m();n(0,"p-button",5),p("onClick",function(){d(t);let i=f();return u(i.guardarCambios())}),s()}}function ze(e,a){e&1&&(n(0,"tr")(1,"th"),C(2,"Nombre"),s(),n(3,"th"),C(4,"Estado de Pago"),s()())}function Ge(e,a){if(e&1){let t=m();n(0,"tr")(1,"td"),C(2),s(),n(3,"td")(4,"p-toggleSwitch",6),p("ngModelChange",function(i){let r=d(t).$implicit,l=f();return u(l.cambiarEstado(r,i))}),s()()()}if(e&2){let t=a.$implicit;c(2),Y(t.apodo),c(2),g("ngModel",t.estadoPagos)}}var I=class e{constructor(a,t,o){this.jugadorService=a;this.messageService=t;this.confirmationService=o}jugadores=F([]);jugadoresOriginal=F([]);ngOnInit(){this.cargarJugadores()}cargarJugadores(){this.jugadorService.cargarJugadores(),this.jugadores=this.jugadorService.jugadores,this.jugadoresOriginal.set(structuredClone(this.jugadores()))}cambiarEstado(a,t){let o=[...this.jugadores()],i=o.findIndex(r=>r.id===a.id);i!==-1&&(o[i]=N(L({},o[i]),{estadoPagos:t}),this.jugadores.set(o))}guardarCambios(){let a=this.jugadoresOriginal(),o=this.jugadores().filter((i,r)=>i.estadoPagos!==a[r]?.estadoPagos).map(i=>({id:i.id,estadoPagos:i.estadoPagos}));if(o.length===0){alert("No hay cambios para guardar");return}this.confirmationService.confirm({message:"\xBFEst\xE1s seguro de que deseas guardar los cambios?",header:"Confirmar cambios",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xED",rejectLabel:"No",accept:()=>{this.jugadorService.actualizarPagos(o).subscribe({next:()=>{this.messageService.add({severity:"success",summary:"\xC9xito",detail:"Cambios guardados correctamente"}),this.cargarJugadores()},error:()=>{this.messageService.add({severity:"error",summary:"Error",detail:"Error al guardar los cambios"})}})}})}static \u0275fac=function(t){return new(t||e)(w(E),w(M),w($))};static \u0275cmp=b({type:e,selectors:[["app-registro-pagos"]],features:[k([M,E,$])],decls:8,vars:2,consts:[["start",""],["styleClass","mb-6"],[3,"value","responsiveLayout"],["pTemplate","header"],["pTemplate","body"],["label","Guardar Cambios","icon","pi pi-save","severity","secondary",1,"mr-2",3,"onClick"],[3,"ngModelChange","ngModel"]],template:function(t,o){t&1&&(n(0,"p-toolbar",1),h(1,Qe,1,0,"ng-template",null,0,ee),s(),O(3,"p-toast"),n(4,"p-table",2),h(5,ze,5,0,"ng-template",3)(6,Ge,5,2,"ng-template",4),s(),O(7,"p-confirmDialog")),t&2&&(c(4),g("value",o.jugadores())("responsiveLayout","scroll"))},dependencies:[T,ve,be,V,ce,se,le,pe,he,de,_e,ye,ke,Ce,Se,me,Te,fe,we,Ee,j,Me,$e],encapsulation:2})};var zt=[{path:"registroPagos",component:I,canActivate:[Ve]}];export{zt as default};
