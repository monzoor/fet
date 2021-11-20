import { render, screen, fireEvent, createEvent } from "@testing-library/react";
import App from "../App";
import { INTERVAL } from "constant";

describe("Rendering test", () => {
  test("Render initial view", () => {
    render(<App />);
    const initialView = screen.getByText(/loading/i);
    expect(initialView).toBeInTheDocument();
  });

  test("Render view after video has loaded", async () => {
    const { findByTestId } = render(<App />);

    const inlineVideo = await findByTestId("videoElement");

    fireEvent(inlineVideo, createEvent("loadeddata", inlineVideo));

    const initialView = screen.getByText(/Play/i);
    expect(initialView).toBeInTheDocument();
  });

  test("Render view when click on play and pause button", async () => {
    const { findByTestId } = render(<App />);

    const inlineVideo = await findByTestId("videoElement");
    Object.defineProperty(global.window.HTMLMediaElement.prototype, "play", {
      configurable: true,
      get() {
        setTimeout(() => this.onloadeddata && this.onloadeddata());
        return () => {};
      },
    });

    fireEvent(inlineVideo, createEvent("loadeddata", inlineVideo));

    const playPauseButton = await findByTestId("playPause");
    fireEvent.click(playPauseButton);

    const pauseButton = screen.getByText(/Pause/i);
    expect(pauseButton).toBeInTheDocument();

    fireEvent.click(playPauseButton);

    const playButton = screen.getByText(/Play/i);
    expect(playButton).toBeInTheDocument();
  });

  test("Render view when click on forward", async () => {
    const { findByTestId } = render(<App />);

    const inlineVideo = await findByTestId("videoElement");
    Object.defineProperty(global.window.HTMLMediaElement.prototype, "play", {
      configurable: true,
      get() {
        setTimeout(() => this.onloadeddata && this.onloadeddata());
        return () => {};
      },
    });

    fireEvent(inlineVideo, createEvent("loadeddata", inlineVideo));

    Object.defineProperty(inlineVideo, "duration", {
      writable: true,
      value: 10,
    });

    const forwardButton = await findByTestId("forward");
    fireEvent.click(forwardButton);

    expect(inlineVideo.currentTime).toBe(INTERVAL);
  });

  test("Render view when click on rewind", async () => {
    const { findByTestId } = render(<App />);

    const inlineVideo = await findByTestId("videoElement");
    Object.defineProperty(global.window.HTMLMediaElement.prototype, "play", {
      configurable: true,
      get() {
        setTimeout(() => this.onloadeddata && this.onloadeddata());
        return () => {};
      },
    });

    fireEvent(inlineVideo, createEvent("loadeddata", inlineVideo));

    Object.defineProperty(inlineVideo, "duration", {
      writable: true,
      value: 10,
    });

    const forwardButton = await findByTestId("forward");
    const rewindButton = await findByTestId("rewind");
    fireEvent.click(forwardButton);
    fireEvent.click(forwardButton);
    fireEvent.click(rewindButton);

    expect(inlineVideo.currentTime).toBe(INTERVAL);
  });
});
