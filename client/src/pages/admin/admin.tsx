//icon
import {
    AiOutlineDashboard,
    IoSettingsOutline,
    GrSystem,
    IoMdArrowDropdown,
    FaSignOutAlt,
    TbSettingsCog,
    AiOutlineMenuFold,
    AiOutlineMenuUnfold,
    GoPasskeyFill
} from "../../assets/icon/index";

//hook
import useAdminListActive from "../../hook/useAdminListActive";
import useAdminMenuActive from "../../hook/useAdminMenuActive";
import useSlideOpen from "../../hook/useSlideOpen";

//style
import './style/admin.sass'

//components
import List from '../../components/admin/list';
import MenuItem from "../../components/admin/menuItem";
import { Button } from "../../components";

//content
import Dashboard from "./dashboard";
import CMS from "./cms";
import Permissions from "./permissions";
import WebSetting from "./webSetting";
import UserSetting from "./userSetting";

const AdminPage = () => {

    //header hook ---------------------------------
    const { isMenuActive, handleMenuClick } = useAdminMenuActive();

    // slide hook ---------------------------------
    const { isList, handleClick } = useAdminListActive();
    const { isSlideOpen, handleOpen } = useSlideOpen();

    // sidebarListItem config -------------
    const sidebarListItem = [
        { text: 'Dashboard', id: 'dashboard', icon: <AiOutlineDashboard /> },
        { text: 'CMS', id: 'cms', icon: <GrSystem /> },
        { text: 'Permissions', id: 'permissions', icon: <GoPasskeyFill /> },
        { text: 'Web Settings', id: 'web settings', icon: <IoSettingsOutline /> },
    ]

    // Render the main content based on the selected slide list item
    const renderContent = () => {
        switch (isList) {
            case 'dashboard':
                return <Dashboard />;
            case 'cms':
                return <CMS />;
            case 'web settings':
                return <WebSetting />;
            case 'settings':
                return <UserSetting />;
            case 'permissions':
                return <Permissions />;
            default:
                return <h4>Welcome to the admin system.<br />Please click on a list item</h4>;
        }
    };

    return (
        <div className={`admin ${isSlideOpen ? 'admin--open' : ''}`}>

            <header className='admin__header'>

                <h4>BACKEND SYSTEM<span className="admin__version">0.1</span></h4>
                <div className='admin__state'>
                    <p className="admin__stateText" onClick={handleMenuClick}>
                        admin
                        <span className={`admin__stateIcon ${isMenuActive ? 'admin__stateIcon--active' : ''}`}><IoMdArrowDropdown /></span>
                    </p>
                    {isMenuActive && (
                        <MenuItem
                            lists={
                                [
                                    { text: 'Settings', icon: <TbSettingsCog />, listClick: () => handleClick('settings') },
                                    { text: 'Logout', icon: <FaSignOutAlt /> },
                                ]
                            }
                        />
                    )}
                </div>

            </header>

            <aside className='admin__sidebar'>
                <Button
                    icon={!isSlideOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
                    btnClassName="admin__sidebarBtn"
                    btnClick={handleOpen}
                />
                <ul className='admin__sidebarListItem'>
                    {sidebarListItem.map((item) => (
                        <List
                            key={item.id}
                            text={isSlideOpen ? '' : item.text}
                            icon={item.icon}
                            listClick={() => handleClick(item.id)}
                            className={isList === item.id ? '--active' : ''}
                        />
                    ))}
                </ul>
            </aside>

            <main className='admin__main'>
                {renderContent()}
            </main>

        </div>
    )
}

export default AdminPage;