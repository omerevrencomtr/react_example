/* eslint-disable no-unused-vars */
import React from "react";
import QuickPanelToggler from "./quick-panel-toggler/QuickPanelToggle";
import QuickActionsPanel from "../../../../app/partials/layout/QuickActionsPanel";
import MyCart from "../../../../app/partials/layout/MyCart";
import UserNotifications from "../../../../app/partials/layout/UserNotifications";
import UserProfile from "../../../../app/partials/layout/UserProfile";
import LanguageSelector from "../../../../app/partials/layout/LanguageSelector";
import { toAbsoluteUrl } from "../../../utils/utils";

export default class Topbar extends React.Component {
  render() {
    return (
        <div className="kt-header__topbar">


        <QuickActionsPanel
          bgImage={toAbsoluteUrl("/media/misc/bg-2.jpg")}
          skin="dark"
          iconType=""
          icon={toAbsoluteUrl("/media/icons/svg/Media/Equalizer.svg")}
          useSVG="true"
          gridNavSkin="light"
        />



        <LanguageSelector iconType="" />


      </div>
    );
  }
}
