import React from 'react'
import ContactUs from '../../components/ContactUs'
import Faq from '../../components/Faq'
import AllPageHeader from "../../layout/AllPageHeader";


function ContactUsPage(){
    return(<>
        <AllPageHeader title="Contact Us" />

    <ContactUs/>
    </>
    )
}

export default ContactUsPage