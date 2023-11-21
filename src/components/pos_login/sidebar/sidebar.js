import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logoGPEB from '../../../static/Logo_GPEB_Menor_40x46.png';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import router from "../../../data/sideBarRouter.json"
  import './sidebar.scss';


function SideBar () {

    return (
        <CDBSidebar toggled="false" textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src={logoGPEB} roundedCircle /> LIHOM
                </Col>
              </Row>
            </Container>
        </CDBSidebarHeader>
        <CDBSidebarContent >
          <CDBSidebarMenu className="nav-router">
            {router.map((data, index) => (
              <NavLink to={data.to} >
                <CDBSidebarMenuItem icon={data.icon} >{data.message}</CDBSidebarMenuItem>
              </NavLink>
            ))}

            <NavLink to="/login">
              <CDBSidebarMenuItem > Logout</CDBSidebarMenuItem>
            </NavLink>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    );
}

export default SideBar