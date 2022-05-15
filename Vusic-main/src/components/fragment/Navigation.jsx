import React, {useContext, useState} from "react";
import '../assets/scss/Navigation.scss';
import SearchBar from "./SearchBar";
import Brand from "./Brand";
import {ThemeContext} from "../../api/Theme";
import {ExploreOutlined, HomeOutlined,} from "@material-ui/icons";


function Navigation() {

    
    const useStyle = useContext(ThemeContext);
    return (
        <nav style={useStyle.component}>
            <Brand/>
            <div className={"navigation"}>
               {/* <NavigationButton href={"/home"} name={"Home"}/>*/}
               {/* <NavigationButton href={"/home/about"} name={"About"}/>*/}
                {/*<NavigationButton href={"/home/add"} name={"Add"}/>*/}
            </div>
            <SearchBar/>
            <div className="aside-bar-container">
                <a className={"lib-sub"}  href={"/home"} title={"Home"} > <HomeOutlined/> </a></div>
            <div className="aside-bar-container">
                <a className={"lib-sub"}  href={"/home/about"}  title={"explore"}> <ExploreOutlined/> </a>
            </div>
            
        </nav>
    );
}

export default Navigation;