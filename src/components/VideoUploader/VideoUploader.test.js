import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import VideoUploader from "./index";
import React from "react";

test('Should call handler on video upload', async () => {
    const uploadMock = jest.fn();
    render(<VideoUploader onUpload={uploadMock}/>);

    const file = new File([], 'video.mp4', {type: 'video/mp4'})
    const inputElement = screen.getByTestId("video-input");

    fireEvent.change(inputElement, {
        target: {
            files: [file],
        },
    })

    await waitFor(() => expect(uploadMock).toHaveBeenCalled());
});
