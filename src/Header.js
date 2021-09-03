import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';
const Header = ({ logo: LogoComponent, actions = [], children, className }) => {
  const classes = useStyles();
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <header className={clsx(classes.root, className)} data-testid="header">
      <div className={classes.actions}>
        <Container fixed={!isMobile} className={classes.actionsContainer}>
          {React.cloneElement(LogoComponent, {
            ...(LogoComponent.props || {}),
            className: classes.logo,
          })}
          <div className={classes.actionsContent}>{actions}</div>
        </Container>
      </div>
      <div className={classes.linksContainer}>
        <Container className={classes.links}>
          <IconButton
            onClick={toggleMenu}
            className={classes.menuToggleButton}
            data-testid="icon-button"
          >
            {!menuOpened && <MenuIcon />}
            {menuOpened && <CloseIcon />}
          </IconButton>
          <div className={menuOpened ? classes.open : null}>
            <Container fixed={!isMobile} className={classes.menuItens}>
              {children}
            </Container>
          </div>
        </Container>
      </div>
      <div className={classes.beforeBevel} />
      <div className={classes.afterBevel} />
    </header>
  );
};
Header.propTypes = {
  logo: PropTypes.any,
  actions: PropTypes.arrayOf(PropTypes.any),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
};
export default Header;