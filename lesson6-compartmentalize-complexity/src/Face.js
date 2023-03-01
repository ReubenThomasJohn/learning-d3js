import { BackgroundCircle } from './BackgroundCircle'; // in curly braces since it's a named export. If default export then no curly braces.
import { Eyes } from './Eyes'
import { Mouth } from './Mouth'
import { FaceContainer } from './FaceContainer';

export const Face = ({
    width, 
    height, 
    centerX, 
    centerY, 
    strokeWidth, 
    eyeOffsetX, 
    eyeOffsetY, 
    eyeRadius, 
    mouthRadius, 
    mouthWidth
            }) => (
    <FaceContainer 
    width={width}
    height={height}
    centerX={centerX}
    centerY={centerY}    
    >
        <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth}/>
        <Eyes
            eyeOffsetX={eyeOffsetX}
            eyeOffsetY={eyeOffsetY}
            eyeRadius={eyeRadius} 
        />
        <Mouth
            mouthRadius={mouthRadius}
            mouthWidth={mouthWidth}
        />
    </FaceContainer>
);