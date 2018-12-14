import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";
import AppHeader from "@/components/AppHeader";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: HomePage
    },
    {
      path: "/experience",
      name: "Experience",
      component: Experience
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ],
  linkActiveClass: "active-link", // active class for non-exact links.
  linkExactActiveClass: "active" // active class for *exact* links.
});
