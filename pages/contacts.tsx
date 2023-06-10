// External libraries
import Image from "next/image";
import Head from "next/head";
import type { NextPage } from 'next';

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// SK Components
import {
  ContentLayout,
  Section,
  Header,
  MaterialIcon,
  TextField,
  TextFieldProps,
  Button,
} from "@suankularb-components/react";

import React, { useState,FormEvent,ChangeEvent } from 'react';
import Tdline from '../components/tdline';

// Types
import { CustomPage, LangCode } from "@/utils/types";

// Function to check if it's a mobile device
function isMobileDevice() {
  return typeof window !== 'undefined' && window.innerWidth < window.innerHeight;;
}

// Page

const IndexPage: NextPage = () => {
  const { t } = useTranslation(["home", "common"]);
  const isMobile = isMobileDevice();

  const [email,setEmail] = useState('')
  const [fullName,setFullName] = useState('')
  const [nick,setnick] = useState('')
  const [classN,setclassN] = useState('')
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = {email, fullName,nick,classN}
        
        const response = fetch('/api/setAdder',{
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        })
        console.log(form)
    }

  return (
    <>
      <Head>
        <title>{t("brand.name", { ns: "common" })}</title>
      </Head>
      <ContentLayout>
        <Section>
          <Header>{t("contactsPage.title")}</Header>
          <Tdline />
          
              <p className='skc-display-small'>{t("contactsPage.Head1")}</p> 
            <p >{t("contactsPage.ctx1")}</p>

            <form onSubmit={handleSubmit} className="inline"><div className="top-0 w-96 inline-grid">
              <label className="text-gray-400">
                Email
              </label>
          <input
          type='text'
            className='w-80 h-12 pl-4'
            style={{zIndex:20}}
            value={email}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value as string)
            }
        /> 
<br/>
<label className="text-gray-400">
                NickName
              </label>
          <input
          type='text'
            className='w-80 h-12 pl-4'
            style={{zIndex:20}}
            value={nick}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setnick(event.target.value as string)
            }
        />
        </div>
        
        
        <div className="w-96 inline-grid top-0"> <label className="text-gray-400">
        Name
      </label>
  <input
  type='text'
    className='w-80 h-12 pl-4'
    style={{zIndex:20}}
    value={fullName}
    onChange={(event: ChangeEvent<HTMLInputElement>) =>
      setFullName(event.target.value as string)
    }
/> <br/> <label className="text-gray-400">
        Discord (optional)
      </label>
  <input
  type='text'
    className='w-80 h-12 pl-4'
    style={{zIndex:20}}
    value={classN}
    onChange={(event: ChangeEvent<HTMLInputElement>) =>
      setclassN(event.target.value as string)
    }
/></div><br/> <br/>
 


        <div className="w-80 left-3" style={{zIndex:20}}>
          <button className='w-80'
    type='submit'
  ><Button
    appearance="filled"
    icon={<MaterialIcon icon="login" />}
    tooltip="Join us or else"
    >
    Join us
  </Button>
  </button>
       </div>  </form> <br/>

            <p className='skc-display-small'>{t("contactsPage.Head2")}</p> 
            <p >{t("contactsPage.ctx2")}</p>

          <div className="flex w-full h-24">
            <span className="inline-block rounded-md w-2/3 border-2 h-16 border-neutral-500 p-3"> <p> @SKTechDev </p> <p className="text-gray-400 text-sm"> Instagram </p> </span>
            <img src="/images/home/media.png" className="rounded-md h-16 border-neutral-500 relative border-2" style={{left:'-64px'}}/>
            <span className="inline-block rounded-md w-1/12"></span>
            <span className="inline-block rounded-md w-2/3 border-2 h-16 border-neutral-500 p-3">@SKTechDev <p className="text-gray-400 text-sm"> Discord </p> </span>
            <img src="/images/home/media3.png" className="rounded-md h-16 border-neutral-500 relative border-2" style={{left:'-64px'}}/>
            <span className="inline-block rounded-md w-1/12"></span>
            <span className="inline-block rounded-md w-2/3 border-2 h-16 border-neutral-500 p-3">SKTechDev Club <p className="text-gray-400 text-sm"> Youtube </p> </span>
            <img src="/images/home/media2.png" className="rounded-md h-16 border-neutral-500 relative border-2" style={{left:'-64px'}}/>
          </div>


            <p className='skc-display-small'>{t("contactsPage.Head3")}</p> 
            <p >{t("contactsPage.ctx3")}</p>
        </Section>
        

        
      </ContentLayout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: LangCode }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default IndexPage;

