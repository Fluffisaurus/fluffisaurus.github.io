/*
 * Functional template code from embedpdf's examples seen here.
 * https://github.com/embedpdf/embed-pdf-viewer/blob/f3486941665843c5bcbe7778a871fe8b068a4fa4/examples/react-mui/src/components/page-controls/index.tsx
 *
 * Rewritten and modified by me for my specific usecase.
 */

import { useEffect, useRef, useState, useCallback } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import { useViewportCapability } from "@embedpdf/plugin-viewport/react";
import { useScroll } from "@embedpdf/plugin-scroll/react";

import theme from "../../mui/theme";

const PageControls = () => {
  const { provides: viewport } = useViewportCapability();
  const {
    provides: scroll,
    state: { currentPage, totalPages },
  } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [inputValue, setInputValue] = useState<string>(currentPage.toString());

  useEffect(() => {
    setInputValue(currentPage.toString());
  }, [currentPage]);

  const startHideTimer = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      if (!isHovering) {
        setIsVisible(false);
      }
    }, 4000) as unknown as NodeJS.Timeout;
  }, [isHovering]);

  useEffect(() => {
    if (!viewport) return;

    return viewport.onScrollActivity((activity) => {
      if (activity) {
        setIsVisible(true);
        startHideTimer();
      }
    });
  }, [viewport, startHideTimer]);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    startHideTimer();
  };

  const handlePageChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const pageStr = formData.get("page") as string;
    const page = parseInt(pageStr);

    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      scroll?.scrollToPage?.({
        pageNumber: page,
      });
    }
  };

  const handlePreviousPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.currentTarget.blur();
    if (currentPage > 1) {
      scroll?.scrollToPage?.({
        pageNumber: currentPage - 1,
      });
    }
  };

  const handleNextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.currentTarget.blur();
    if (currentPage < totalPages) {
      scroll?.scrollToPage?.({
        pageNumber: currentPage + 1,
      });
    }
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "absolute",
        bottom: 18,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.2s ease-in-out",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          bgcolor: theme.vars.palette.background.default,
          borderRadius: 1,
          border: theme.vars.palette.background.pdf,
          p: 0.5,
        }}
      >
        <IconButton
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          size="small"
        >
          <NavigateBeforeIcon />
        </IconButton>

        <form
          onSubmit={handlePageChange}
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <TextField
            name="page"
            value={inputValue}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, "");
              setInputValue(value);
            }}
            slotProps={{
              input: {
                inputProps: {
                  style: {
                    width: "32px",
                    height: "25px",
                    padding: "4px",
                    textAlign: "center",
                    fontSize: "14px",
                  },
                },
              },
            }}
            variant="outlined"
            size="small"
          />
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {totalPages}
          </Typography>
        </form>

        <IconButton
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          size="small"
        >
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PageControls;
