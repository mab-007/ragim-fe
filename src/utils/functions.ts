interface ControlLightParameters {
    brightness: number;
    colorTemperature: 'daylight' | 'cool' | 'warm';
  }
  
  type FunctionDeclaration = {
    name: string;
    parameters: {
      type: 'OBJECT';
      description: string;
      properties: {
        [key: string]: {
          type: 'NUMBER' | 'STRING';
          description: string;
        };
      };
      required: string[];
    };
  };
  
  const controlLightFunctionDeclaration: FunctionDeclaration = {
    name: "controlLight",
    parameters: {
      type: "OBJECT",
      description: "Set the brightness and color temperature of a room light.",
      properties: {
        brightness: {
          type: "NUMBER",
          description: "Light level from 0 to 100. Zero is off and 100 is full brightness.",
        },
        colorTemperature: {
          type: "STRING",
          description: "Color temperature of the light fixture which can be `daylight`, `cool` or `warm`.",
        },
      },
      required: ["brightness", "colorTemperature"],
    },
  };
  
  // Executable function code. Put it in a map keyed by the function name
  // so that you can call it once you get the name string from the model.
  const functions: Record<string, (params: any) => any> = {
    controlLight: ({ brightness, colorTemperature }: ControlLightParameters) => {
      return setLightValues(brightness, colorTemperature);
    },
  };

  function setLightValues(brightness: number, colorTemperature: string): void {
    // Implement the logic to actually set the light values here. 
    // This might involve interacting with a smart home device, 
    // sending commands to a lighting system, etc. 
    console.log(`Setting brightness to ${brightness} and color temperature to ${colorTemperature}`); 
  }
