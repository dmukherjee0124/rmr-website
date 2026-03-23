import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Team } from "./pages/Team";
import { Process } from "./pages/Process";
import { Contact } from "./pages/Contact";
import { Careers } from "./pages/Careers";
import { IronOre } from "./pages/IronOre";
import { Coal } from "./pages/Coal";
import { Bauxite } from "./pages/Bauxite";
import { Limestone } from "./pages/Limestone";
import { NotFound } from "./pages/NotFound";

export const routes = {
  HOME: '/',
  ABOUT: '/about',
  PRODUCTS: '/products',
  IRON_ORE: '/products/iron-ore',
  COAL: '/products/coal',
  BAUXITE: '/products/bauxite',
  LIMESTONE: '/products/limestone',
  TEAM: '/team',
  PROCESS: '/process',
  CAREERS: '/careers',
  CONTACT: '/contact',
  NOT_FOUND: '*',
} as const;

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "products/iron-ore", Component: IronOre },
      { path: "products/coal", Component: Coal },
      { path: "products/bauxite", Component: Bauxite },
      { path: "products/limestone", Component: Limestone },
      { path: "team", Component: Team },
      { path: "process", Component: Process },
      { path: "careers", Component: Careers },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
