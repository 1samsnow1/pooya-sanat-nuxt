import{_ as D,r as s,x as q,c,a as t,i as a,l as g,v as f,n as A,m as v,p as B,e as N,t as C,q as R,s as z,o as m}from"./hnwj6K8j.js";import{l as E}from"./C7GBYzab.js";import{u as H}from"./Dx7Blb-I.js";import"./CW7irCmf.js";const L={class:"w-full"},j={class:"cursor-pointer",for:"pic"},F=["src"],W=["src"],G={class:"text-slate-300 inputMargins"},J={class:"flex lg:grid lg:grid-cols-2 gap-4 flex-wrap"},K={class:"text-slate-300"},O={class:"text-slate-300"},Q={class:"text-slate-300"},X={class:"text-slate-300"},Y={class:"marginTop"},Z={key:1,class:"w-40"},$={class:"notfpadding"},ee={key:0,class:"text-red-500"},te={key:1,class:"text-green-500"},le={__name:"[id]",setup(ae){let y=s(!1),h=s(0),i=s(""),w=s(190);const V=()=>{w.value=Math.max(190,r.value.length*10+25)};let _=s(null);const U=()=>{const o=_.value;o.style.height="auto",o.style.height=`${o.scrollHeight}px`};let k=s(null);function I(o){const e=o.target.files[0];if(e){const l=new FileReader;l.onload=x=>{k.value=x.target.result},l.readAsDataURL(e)}}let M=s(null),r=s(null),n=s(null),u=s(null),d=s(null),p=s(null),b=s(null);const T=async()=>{if(r.value)if(p.value)if(d.value)if(n.value)if(u.value)i.value=!1;else return i.value="رنگ محصول را وارد نکردید";else return i.value="کتگوری محصول را انتخاب نکردید";else return i.value="کد محصول را وارد نکردید";else return i.value="قیمت محصول را وارد نکردید";else return i.value="نام محصول را وارد نکردید";let o=H("userToken").value;y.value=!0;let e={name:r.value,color:u.value,price:p.value,category:n.value,product_code:d.value};const l=S.params.id;try{const x=await $fetch(`https://api.bargh-saman.ir/api/ProductManagement/product/${l}`,{method:"PUT",body:e,headers:{Authorization:`Bearer ${o}`}});h.value+=1}catch(x){i.value=x}finally{y.value=!1}},S=q();let P=s(null);return(async()=>{const o=S.params.id;try{const e=await $fetch(`https://api.bargh-saman.ir/api/product/${o}`);e&&(P.value=e,r.value=e.name,n.value=e.category,u.value=e.color,p.value=e.price,d.value=e.product_Code,b.value=e.discription)}catch(e){console.log(e)}})(),(o,e)=>(m(),c("form",{class:"w-[95%] svHeight sm:w-4/5 max-w-4xl formMargins",onSubmit:e[6]||(e[6]=z(()=>{},["prevent"]))},[t("div",L,[t("input",{type:"file",ref_key:"productPic",ref:M,id:"pic",class:"hidden",onChange:I},null,544),t("label",j,[!a(k)&&a(P)?(m(),c("img",{key:0,class:"imgPreview",src:a(P).path},null,8,F)):(m(),c("img",{key:1,class:"imgPreview",src:a(k),alt:"عکس محصول"},null,8,W))])]),t("div",G,[e[7]||(e[7]=t("label",{class:"text-blue-400 text-sm md:text-base block md:inline labelPadding"},"نام محصول:",-1)),g(t("input",{style:A({width:a(w)+"px"}),onInput:V,class:"max-w-full transition-all duration-50 inputStyles inputPaddings marginRight",type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>v(r)?r.value=l:r=l),placeholder:"نام محصول"},null,36),[[f,a(r)]])]),t("div",J,[t("div",K,[e[9]||(e[9]=t("label",{class:"text-blue-400 labelPadding labelStyles"},"کتگوری محصول:",-1)),g(t("select",{"onUpdate:modelValue":e[1]||(e[1]=l=>v(n)?n.value=l:n=l),class:"block md:inline w-[190px] md:w-[160px] outline-0 inputPaddings rounded-md focus:ring-black focus:border-black dark:placeholder-black dark:focus:ring-black dark:focus:border-black dark:bg-slate-700 marginRight"},e[8]||(e[8]=[t("option",{value:"سیم"},"سیم",-1),t("option",{value:"کابل شبکه"},"کابل شبکه",-1),t("option",{value:"کابل تلفنی"},"کابل تلفنی",-1)]),512),[[B,a(n)]])]),t("div",O,[e[10]||(e[10]=t("label",{class:"text-blue-400 labelStyles labelPadding"},"رنگ محصول:",-1)),g(t("input",{class:"inputStyles inputPaddings marginRight",type:"text","onUpdate:modelValue":e[2]||(e[2]=l=>v(u)?u.value=l:u=l),placeholder:"رنگ"},null,512),[[f,a(u)]])]),t("div",Q,[e[11]||(e[11]=t("label",{class:"text-blue-400 labelPadding labelStyles"},"کد محصول:",-1)),g(t("input",{class:"inputStyles inputPaddings marginRight",type:"number","onUpdate:modelValue":e[3]||(e[3]=l=>v(d)?d.value=l:d=l),placeholder:"کد"},null,512),[[f,a(d)]])]),t("div",X,[e[12]||(e[12]=t("label",{class:"text-blue-400 labelPadding labelStyles"},"قیمت محصول:",-1)),g(t("input",{class:"inputStyles inputPaddings marginRight",type:"number","onUpdate:modelValue":e[4]||(e[4]=l=>v(p)?p.value=l:p=l),placeholder:"قیمت"},null,512),[[f,a(p)]])])]),t("div",Y,[e[13]||(e[13]=t("label",{class:"text-blue-400 block textareaLable"},"رنگ محصول:",-1)),g(t("textarea",{name:"text",ref_key:"textArea",ref:_,onInput:U,"onUpdate:modelValue":e[5]||(e[5]=l=>v(b)?b.value=l:b=l),class:"min-w-[280px] sm:min-w-[500px] min-h-[100px] sm:min-h-[200px] text-slate-300 inputStyles inputPaddings",placeholder:"متن و جزییات"},null,544),[[f,a(b)]]),a(y)?(m(),c("div",Z,[N(E)])):(m(),c("button",{key:0,onClick:T,class:"bg-blue-600 text-slate-300 block rounded cursor-pointer hover:bg-blue-500 active:scale-90 formButtonPadding"},"ویرایش کردن محصول")),t("div",$,[a(i)?(m(),c("span",ee,C(a(i)),1)):R("",!0),a(h)>0?(m(),c("span",te,C(a(h))+" محصول ویرایش شد",1)):R("",!0)])])],32))}},ue=D(le,[["__scopeId","data-v-e9fb9c4f"]]);export{ue as default};
