import SettingsIcon from "@material-ui/icons/Settings"
import routes from "constants/routes"
import { forwardRef } from "react"
import { MenuItemLink, MenuItemLinkProps } from "react-admin"

const CustomUserMenuItems = (props: any, ref: any) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <MenuItemLink
    {...(props as MenuItemLinkProps)}
    ref={ref}
    to={routes.userSettings}
    primaryText="Settings"
    leftIcon={<SettingsIcon />}
  />
)

export default forwardRef(CustomUserMenuItems)
