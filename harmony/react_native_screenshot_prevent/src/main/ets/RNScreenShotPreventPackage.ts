import { RNPackage, TurboModulesFactory } from '@rnoh/react-native-openharmony/ts';
import type { TurboModule, TurboModuleContext } from '@rnoh/react-native-openharmony/ts';
import { RNScreenShotPreventTurboModule } from './RNScreenShotPreventTurboModule';
import { TM } from "@rnoh/react-native-openharmony/generated/ts"

class RNScreenShotPreventTurboModuleFactory extends TurboModulesFactory {
  constructor(protected ctx: TurboModuleContext) {
    super(ctx);
  }
  createTurboModule(name: string): TurboModule | null {
    if (this.hasTurboModule(name)) {
      return new RNScreenShotPreventTurboModule(this.ctx);
    }
    return null;
  }

  hasTurboModule(name: string): boolean {
    return name === TM.NativeScreenShotPreventNativeModule.NAME;
  }

}

export class RNScreenShotPreventPackage extends RNPackage {
  createTurboModulesFactory(ctx: TurboModuleContext): TurboModulesFactory {
    return new RNScreenShotPreventTurboModuleFactory(ctx);
  }
}