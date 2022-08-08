import { motion, useCycle } from "framer-motion";
import { useDimensions } from "hooks/use-dimensions";
import { useEffect, useRef, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export default function Navbar() {
  const itemIds = [
    {
      title: "Profile",
      to: "/",
      icon: <AccountCircleIcon fontSize="large" sx={{ color: "#FF008C" }} />,
    },
    {
      title: "Contact Me",
      to: "/contact-me",
      icon: <ContactMailIcon fontSize="large" sx={{ color: "#D309E1" }} />,
    },
  ];
  //   const [isOpen, toggleOpen] = useCycle(false, true);
  const [isOpen, toggleOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        console.log("isOpen", isOpen);
        if (isOpen) {
          toggleOpen(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      style={{ zIndex: 1 }}
    >
      <motion.div className="background" variants={sidebar} />
      <motion.ul variants={variants}>
        {itemIds.map((i) => (
          <MenuItem i={i} key={i} />
        ))}
      </motion.ul>
      <MenuToggle toggle={() => toggleOpen(!isOpen)} />
    </motion.nav>
  );
}

export function MenuItem({ i }) {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={i.to}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={4}>
            {i.icon}
          </Grid>
          <Grid item xs={8}>
            <Typography>{i.title}</Typography>
          </Grid>
        </Grid>
      </Link>
    </motion.li>
  );
}

export function MenuToggle({ toggle }) {
  return (
    <button onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}
