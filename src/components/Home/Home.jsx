import React from 'react'
import { useEffect } from 'react';
import * as THREE from "three"
import { PointLight } from 'three';
import moonImage from "../../Images/moon.jpg"
import venusImage from "../../Images/venus.jpg"
import spaceImage from "../../Images/space.jpg";
import TimeLine from '../TimeLine/TimeLine';
import Typography from "@mui/material/Typography";
import "./Home.css";
import YoutubeCard from '../YoutbeCard/YoutubeCard';
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
 const Home=()=> {
  
    useEffect(()=>{
      const textureloader= new THREE.TextureLoader();

      const moontexture= textureloader.load(moonImage);
      const venustexture= textureloader.load(venusImage);
      const spaceTexture = textureloader.load(spaceImage);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
        camera.position.set(4,4,8);
        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGLRenderer({ canvas });
    
        const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
        const  moonmaterial = new THREE.MeshStandardMaterial({map:moontexture});
       
        const moon = new THREE.Mesh(moonGeometry,moonmaterial);

        const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
        const venusmaterial = new THREE.MeshBasicMaterial({map:venustexture});
       
        const venus = new THREE.Mesh(venusGeometry,venusmaterial);
        venus.position.set(8, 5, 5);
       
        
       const pointlight = new THREE.PointLight(0xffffff,1);
       const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
       pointlight.position.set(8, 5, 5);
       pointLight2.position.set(-8, -5, -5);
       const lighthelper = new THREE.PointLightHelper(pointlight); 

        scene.add(moon)
        scene.add(pointlight)
        scene.add(lighthelper)
        scene.add(venus)
        scene.add(pointLight2);
        scene.background = spaceTexture;
        const constSpeed = 0.01;
     window.addEventListener("mousemove",(e)=>{
         if(e.clientX<= window.innerWidth/2)
         {
          moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
         }
         if (e.clientX > window.innerWidth / 2) {
          moon.rotation.x -= constSpeed;
          moon.rotation.y -= constSpeed;
          venus.rotation.x -= constSpeed;
          venus.rotation.y -= constSpeed;
        }
        if (e.clientY > window.innerHeight / 2) {
          moon.rotation.x -= constSpeed;
          moon.rotation.y += constSpeed;
          venus.rotation.x -= constSpeed;
          venus.rotation.y += constSpeed;
        }
        if (e.clientY <= window.innerHeight / 2) {
          moon.rotation.x -= constSpeed;
          moon.rotation.y -= constSpeed;
          venus.rotation.x -= constSpeed;
          venus.rotation.y -= constSpeed;
        }
     })


       
        
    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
        
    animate(); 
    },[])
    
    return (
     <div className='home'>
      <canvas className='homeCanvas'></canvas>
        <div className='homeContainer'>
          <Typography variant='h3'>TIMELINE</Typography>
          <TimeLine timelines={[1,2,3,4]}/>
        </div>    

        <div className="homeSkills">
        <Typography variant='h3'>SKILLS</Typography>
        
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35302887-bf5b-4c46-a9e0-fc72c65ffb50/d2zaii3-22e60a2b-a164-44bd-a487-cb16589a4799.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1MzAyODg3LWJmNWItNGM0Ni1hOWUwLWZjNzJjNjVmZmI1MFwvZDJ6YWlpMy0yMmU2MGEyYi1hMTY0LTQ0YmQtYTQ4Ny1jYjE2NTg5YTQ3OTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hm2OTe9W756fttOuga2kQ5lWBIWQcTyfHkS8qvTygyQ" alt="Face1" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src="https://wallpaperaccess.com/full/2161339.jpg" alt="Face2" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src="https://farm6.staticflickr.com/5112/6970631088_f8a396cc6a.jpg" alt="Face3" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src="http://softwareengineeringdaily.com/wp-content/uploads/2015/07/react.png" alt="Face4" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src="http://softwareengineeringdaily.com/wp-content/uploads/2015/07/react.png" alt="Face5" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src="http://softwareengineeringdaily.com/wp-content/uploads/2015/07/react.png" alt="Face6" />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
            </div>
           </div>

           <div className="homeYoutube">
           <Typography variant='h3'>YOUTUBE</Typography>

           <div className="homeYoutubeWrapper">
           <YoutubeCard/>
           <YoutubeCard/>
           <YoutubeCard/>
           <YoutubeCard/>
           </div>
           </div>
        </div>
        
        

    

    )
}
export default Home;