import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/report">
        <Translate contentKey="global.menu.entities.samReport" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/social-net-work">
        <Translate contentKey="global.menu.entities.samSocialNetWork" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/transfer">
        <Translate contentKey="global.menu.entities.paymentTransfer" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/wallet">
        <Translate contentKey="global.menu.entities.paymentWallet" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/mint">
        <Translate contentKey="global.menu.entities.paymentMint" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/notification">
        <Translate contentKey="global.menu.entities.notificationNotification" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/invoice">
        <Translate contentKey="global.menu.entities.samInvoice" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/customer">
        <Translate contentKey="global.menu.entities.samCustomer" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/lesson">
        <Translate contentKey="global.menu.entities.samLesson" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/room">
        <Translate contentKey="global.menu.entities.samRoom" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/deposit">
        <Translate contentKey="global.menu.entities.samDeposit" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu as React.ComponentType<any>;
