import {readFileAsURL} from "../../util/readFileAsURL";
import {render, screen, waitFor} from "@testing-library/react";
import VideoPlayer from "./VideoPlayer";
import React from "react";

const setUp = async () => {
    const video = new File([], 'video.mp4', {type: 'video/mp4'})
    const videoUrl = await readFileAsURL(video);

    render(<VideoPlayer video={videoUrl}/>);

    const playButton = screen.getByTestId("play-button");
    const pauseButton = screen.getByTestId("pause-button");

    return {pauseButton, playButton};
}

test('Should play video on Play button click', async () => {
    const {playButton} = await setUp();

    const onPlayMock = jest
        .spyOn(window.HTMLMediaElement.prototype, 'play')
        .mockImplementation(() => {
        });

    playButton.click();

    await waitFor(() => expect(onPlayMock).toHaveBeenCalled());
});

test('Should pause video on Pause button click', async () => {
    const {playButton, pauseButton} = await setUp();

    const onPauseMock = jest
        .spyOn(window.HTMLMediaElement.prototype, 'pause')
        .mockImplementation(() => {
        });

    playButton.click();
    pauseButton.click();

    await waitFor(() => expect(onPauseMock).toHaveBeenCalled());
});