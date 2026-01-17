/*
 * Functional template code from embedpdf's examples seen here.
 * https://github.com/embedpdf/embed-pdf-viewer/blob/f3486941665843c5bcbe7778a871fe8b068a4fa4/examples/react-mui/src/application.tsx
 *
 * Rewritten and modified by me for my specific usecase.
 */

import Box from "@mui/material/Box";

import { createPluginRegistration } from "@embedpdf/core";
import { EmbedPDF } from "@embedpdf/core/react";
import { usePdfiumEngine } from "@embedpdf/engines/react";

import {
  Viewport,
  ViewportPluginPackage,
} from "@embedpdf/plugin-viewport/react";
import { Scroller, ScrollPluginPackage } from "@embedpdf/plugin-scroll/react";
import {
  DocumentContent,
  DocumentManagerPluginPackage,
} from "@embedpdf/plugin-document-manager/react";
import {
  RenderLayer,
  RenderPluginPackage,
} from "@embedpdf/plugin-render/react";

import { InteractionManagerPluginPackage } from "@embedpdf/plugin-interaction-manager/react";
import { FullscreenPluginPackage } from "@embedpdf/plugin-fullscreen/react";
import { ExportPluginPackage } from "@embedpdf/plugin-export/react";
import { ZoomMode, ZoomPluginPackage } from "@embedpdf/plugin-zoom/react";
import { ZoomGestureWrapper } from "@embedpdf/plugin-zoom/react";

import PdfToolbar from "./PdfToolbar";
import PageControls from "./PageControls";
import theme from "../../mui/theme";

// 1. Register the plugins you need
const plugins = [
  createPluginRegistration(DocumentManagerPluginPackage, {
    initialDocuments: [
      {
        url: "https://res.cloudinary.com/djlcricbu/image/upload/v1653627212/pdfs/placeholder-pdf-doc_j3pjxs.pdf",
      },
    ],
  }),
  createPluginRegistration(ViewportPluginPackage),
  createPluginRegistration(ScrollPluginPackage),
  createPluginRegistration(RenderPluginPackage),

  createPluginRegistration(InteractionManagerPluginPackage),
  createPluginRegistration(FullscreenPluginPackage),
  createPluginRegistration(ExportPluginPackage, {
    defaultFileName: "resume-2025_angus-hon.pdf",
  }),
  createPluginRegistration(ZoomPluginPackage, {
    defaultZoomLevel: ZoomMode.FitPage,
    minZoom: 0.25,
    maxZoom: 2,
    zoomRanges: [{ min: 0.25, max: 2.1, step: 0.25 }],
  }),
];

const PdfViewer = () => {
  // 2. Initialize the engine with the React hook
  const { engine, isLoading } = usePdfiumEngine();

  if (isLoading || !engine) {
    return <div>Loading PDF Engine...</div>;
  }

  // 3. Wrap your UI with the <EmbedPDF> provider
  return (
    <Box
      sx={{
        height: "85%",
      }}
    >
      <EmbedPDF engine={engine} plugins={plugins}>
        {({ activeDocumentId }) =>
          activeDocumentId && (
            <DocumentContent documentId={activeDocumentId}>
              {({ isLoaded }) =>
                isLoaded && (
                  <Box
                    sx={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      userSelect: "none",
                    }}
                  >
                    <PdfToolbar documentId={activeDocumentId} />
                    <Viewport
                      documentId={activeDocumentId}
                      style={{
                        backgroundColor: theme.vars.palette.background.pdf,
                      }}
                    >
                      <ZoomGestureWrapper documentId={activeDocumentId}>
                        <Scroller
                          documentId={activeDocumentId}
                          renderPage={({ width, height, pageIndex }) => (
                            <div style={{ width, height }}>
                              {/* The RenderLayer is responsible for drawing the page */}
                              <RenderLayer
                                pageIndex={pageIndex}
                                documentId={activeDocumentId}
                              />
                            </div>
                          )}
                        />
                      </ZoomGestureWrapper>
                      <PageControls documentId={activeDocumentId} />
                    </Viewport>
                  </Box>
                )
              }
            </DocumentContent>
          )
        }
      </EmbedPDF>
    </Box>
  );
};

export default PdfViewer;
