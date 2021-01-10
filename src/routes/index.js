import ProfileManager from "../pages/ProfileManager/ProfileManager";

const  sampleComponent = ()=>{
    return (
        <div> sample </div>
    )
}
export const DashboardRoutes =[
	{path:"/", exact:true, component: sampleComponent,title:"FitnessPro Central"},
	{path:"/schedule-manager",component:sampleComponent,title: "Schedule Manager"},
	{path:"/member-management",component:sampleComponent,title: "Member Management",hidden:true},
	{path:"/offer-management",component:sampleComponent,title:"Offer Management"},
	{path:"/social-marketing-center",component:sampleComponent,title:"Social Marketing Center"},
	{path:"/content-studio",component:sampleComponent,title:"Content Studio"},
    {path:"/pt-center",component:sampleComponent,title:"PT Center"},
    {path:"/accounting",component:sampleComponent,title:"Accounting"},
    {path:"/store-front",component:sampleComponent,title:"Storefront"},
    {path:"/charity",component:sampleComponent,title:"Charity"},
    {path:"/profile-manager",component:ProfileManager,title:"Profile Manager"},
    {path:"/prostudio",component:sampleComponent,title:"ProStudio"},
    {path:"/reviews",component:sampleComponent,title:"Reviews"},
];

// export const AuthRoutes = [
// 	{route:"/", component:GetHelp,exact: true,title:""},
// 	{route:"/helper-records",component: HelperRecords,title:"Helper Records"},
// ];