import { createBrowserRouter, Navigate } from "react-router";
import { DesignSystemLayout } from "./pages/DesignSystemLayout";
import { Foundations } from "./pages/Foundations";
import { Components } from "./pages/Components";
import { NavigationHub } from "./pages/NavigationHub";
import { DashboardData } from "./pages/DashboardData";
import { Finsight } from "./pages/Finsight";
import { AIInteraction } from "./pages/AIInteraction";
import { Workflows } from "./pages/Workflows";
import { Layouts } from "./pages/Layouts";
import { FinsightLayout } from "./components/finsight/FinsightLayout";
import { MarketosLayout } from "./components/marketos/MarketosLayout";
import { ActivePipelines } from "./pages/finsight/ActivePipelines";
import { Completed } from "./pages/finsight/Completed";
import { Referrers } from "./pages/finsight/Referrers";
import { Settings } from "./pages/finsight/Settings";
import { Admin } from "./pages/finsight/Admin";
import { MarketosHome } from "./pages/marketos/MarketosHome";
import { MarketosPlan } from "./pages/marketos/MarketosPlan";
import { MarketosCreate } from "./pages/marketos/MarketosCreate";
import { MarketosPublish } from "./pages/marketos/MarketosPublish";
import { MarketosReview } from "./pages/marketos/MarketosReview";
import { MarketosSettings } from "./pages/marketos/MarketosSettings";
import { MarketosAdmin } from "./pages/marketos/MarketosAdmin";
import { MarketosHelp } from "./pages/marketos/MarketosHelp";
import { PracticeEvolutionLayout } from "./components/practice-evolution/PracticeEvolutionLayout";
import { Dashboard as HomeDashboard } from "./pages/home/Dashboard";
import { FathomSummaryQueue } from "./pages/home/FathomSummaryQueue";
import { TaskTracker } from "./pages/home/TaskTracker";
import { ContentRegistry } from "./pages/home/ContentRegistry";
import { ProgramSettings } from "./pages/home/ProgramSettings";
import { HomeSettings } from "./pages/home/HomeSettings";
import { HubLayout } from "./components/hub/HubLayout";
import { HubDashboard } from "./pages/hub/HubDashboard";
import { HubIntegrations } from "./pages/hub/HubIntegrations";
import { HubNotifications } from "./pages/hub/HubNotifications";
import { HubBugs } from "./pages/hub/HubBugs";
import { HubRoadmap } from "./pages/hub/HubRoadmap";
import { RoleAuditLayout } from "./components/roleaudit/RoleAuditLayout";
import { RoleAuditAudit } from "./pages/roleaudit/RoleAuditAudit";
import { RoleAuditAnalyse } from "./pages/roleaudit/RoleAuditAnalyse";
import { RoleAuditAdapt } from "./pages/roleaudit/RoleAuditAdapt";
import { RoleAuditAlign } from "./pages/roleaudit/RoleAuditAlign";
import { RoleAuditAdmin } from "./pages/roleaudit/RoleAuditAdmin";
import { FeeModelerLayout } from "./components/feemodeler/FeeModelerLayout";
import { FeeModelerHome } from "./pages/feemodeler/FeeModelerHome";
import { CoreProcess } from "./pages/feemodeler/CoreProcess";
import { Strategies } from "./pages/feemodeler/Strategies";
import { Deliverables } from "./pages/feemodeler/Deliverables";
import { OneToMany } from "./pages/feemodeler/OneToMany";
import { Advice } from "./pages/feemodeler/Advice";
import { Packages } from "./pages/feemodeler/Packages";
import { ClientPricing } from "./pages/feemodeler/ClientPricing";
import { LongTailAnalysis } from "./pages/feemodeler/LongTailAnalysis";
import { FeeModelerSettings } from "./pages/feemodeler/FeeModelerSettings";
import { CoachAILayout } from "./components/coachai/CoachAILayout";
import { CoachAIPlan } from "./pages/coachai/CoachAIPlan";
import { CoachAIToday } from "./pages/coachai/CoachAIToday";
import { CoachAICoach } from "./pages/coachai/CoachAICoach";
import { CoachAISettings } from "./pages/coachai/CoachAISettings";
import { CoachAITeam } from "./pages/coachai/CoachAITeam";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DesignSystemLayout,
    children: [
      { index: true, element: <Navigate to="/foundations" replace /> },
      { path: "foundations", Component: Foundations },
      { path: "core-ui", Component: Components },
      { path: "platform-navigation", Component: NavigationHub },
      { path: "dashboard-data", Component: DashboardData },
      { path: "ai-interactions", Component: AIInteraction },
      { path: "workflows", Component: Workflows },
      { path: "layouts", Component: Layouts },
    ],
  },
  {
    path: "/finsight",
    Component: FinsightLayout,
    children: [
      { index: true, Component: Finsight },
      { path: "active", Component: ActivePipelines },
      { path: "completed", Component: Completed },
      { path: "referrers", Component: Referrers },
      { path: "settings", Component: Settings },
      { path: "admin", Component: Admin },
    ],
  },
  {
    path: "/marketos",
    Component: MarketosLayout,
    children: [
      { index: true, Component: MarketosHome },
      { path: "plan", Component: MarketosPlan },
      { path: "create", Component: MarketosCreate },
      { path: "publish", Component: MarketosPublish },
      { path: "review", Component: MarketosReview },
      { path: "settings", Component: MarketosSettings },
      { path: "help", Component: MarketosHelp },
      { path: "admin", Component: MarketosAdmin },
    ],
  },
  {
    path: "/home",
    Component: PracticeEvolutionLayout,
    children: [
      { index: true, Component: HomeDashboard },
      { path: "fathom", Component: FathomSummaryQueue },
      { path: "tasks", Component: TaskTracker },
      { path: "content", Component: ContentRegistry },
      { path: "program", Component: ProgramSettings },
      { path: "settings", Component: HomeSettings },
    ],
  },
  {
    path: "/hub",
    Component: HubLayout,
    children: [
      { index: true, Component: HubDashboard },
      { path: "integrations", Component: HubIntegrations },
      { path: "notifications", Component: HubNotifications },
      { path: "bugs", Component: HubBugs },
      { path: "roadmap", Component: HubRoadmap },
    ],
  },
  {
    path: "/roleaudit",
    Component: RoleAuditLayout,
    children: [
      { index: true, Component: RoleAuditAudit },
      { path: "analyse", Component: RoleAuditAnalyse },
      { path: "adapt", Component: RoleAuditAdapt },
      { path: "align", Component: RoleAuditAlign },
      { path: "admin", Component: RoleAuditAdmin },
    ],
  },
  {
    path: "/feemodeler",
    Component: FeeModelerLayout,
    children: [
      { index: true, Component: FeeModelerHome },
      { path: "core-process", Component: CoreProcess },
      { path: "strategies", Component: Strategies },
      { path: "deliverables", Component: Deliverables },
      { path: "one-to-many", Component: OneToMany },
      { path: "advice", Component: Advice },
      { path: "packages", Component: Packages },
      { path: "costed-schedule", element: <Navigate to="/feemodeler/client-pricing" replace /> },
      { path: "client-pricing", Component: ClientPricing },
      { path: "analysis", Component: LongTailAnalysis },
      { path: "settings", Component: FeeModelerSettings },
    ],
  },
  {
    path: "/coachai",
    Component: CoachAILayout,
    children: [
      { index: true, Component: CoachAIPlan },
      { path: "today", Component: CoachAIToday },
      { path: "coach", Component: CoachAICoach },
      { path: "settings", Component: CoachAISettings },
      { path: "team", Component: CoachAITeam },
    ],
  },
]);
