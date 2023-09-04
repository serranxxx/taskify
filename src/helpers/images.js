
import a_1 from '../assets/avatars/avatar-1.svg'
import a_2 from '../assets/avatars/avatar-2.svg'
import a_3 from '../assets/avatars/avatar-3.svg'
import a_4 from '../assets/avatars/avatar-4.svg'
import a_5 from '../assets/avatars/avatar-5.svg'
import a_6 from '../assets/avatars/avatar-6.svg'
import a_7 from '../assets/avatars/avatar-7.svg'
import a_8 from '../assets/avatars/avatar-8.svg'
import a_9 from '../assets/avatars/avatar-9.svg'

import im_1 from '../assets/tasks-images/task-image-1.svg'
import im_2 from '../assets/tasks-images/task-image-2.svg'
import im_3 from '../assets/tasks-images/task-image-3.svg'
import im_4 from '../assets/tasks-images/task-image-4.svg'
import im_5 from '../assets/tasks-images/task-image-5.svg'
import im_6 from '../assets/tasks-images/task-image-6.svg'
import im_7 from '../assets/tasks-images/task-image-7.svg'
import im_8 from '../assets/tasks-images/task-image-8.svg'
import im_9 from '../assets/tasks-images/task-image-9.svg'
import im_10 from '../assets/tasks-images/task-image-10.svg'
import im_11 from '../assets/tasks-images/task-image-11.svg'
import im_12 from '../assets/tasks-images/task-image-12.svg'

import image_1 from '../assets/SVG/SVG/image-1.svg'
import image_2 from '../assets/SVG/SVG/image-2.svg'



export function SelectAvatar(index)  {
    switch (index) {
        case 1: return a_1
        case 2: return a_2
        case 3: return a_3
        case 4: return a_4
        case 5: return a_5
        case 6: return a_6
        case 7: return a_7
        case 8: return a_8
        case 9: return a_9
        default:
            break;
    }
}
export function SelectImage(index)  {
    switch (index) {
        case 1: return im_1
        case 2: return im_2
        case 3: return im_3
        case 4: return im_4
        case 5: return im_5
        case 6: return im_6
        case 7: return im_7
        case 8: return im_8
        case 9: return im_9
        case 10: return im_10
        case 11: return im_11
        case 12: return im_12
        default:
            break;
    }
}

export const colorSelector = (index) => {
    switch (index) {
        case 1:
            return '#3e92c4'
        case 2:
            return '#8ed4fd'
        case 3:
            return '#f0c145'
        case 4:
            return '#55a6d9'
        case 5:
            return '#204b98'
        case 6:
            return '#ed9cab'
        case 7:
            return '#d5ecfa'
        case 8:
            return '#89e8e0'
        case 9:
            return '#956888'
        case 10:
            return '#6edfc7'
        default:
            return '#f0c145';
    }
}

export const images_ = {
    img_1: image_1,
    img_2: image_2
}