import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';

describe('NgAlainSchematic: application', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  describe(`update package.json`, () => {
    beforeEach(() => ({ runner, tree } = createAlainApp()));
    it(`should add yoyo-ng-module to dependencies`, () => {
      const packageJson = JSON.parse(tree.readContent('package.json'));
      expect(packageJson.dependencies['yoyo-ng-module/theme']).toBeDefined();
      expect(packageJson.dependencies['yoyo-ng-module/abc']).toBeDefined();
      expect(packageJson.dependencies['yoyo-ng-module/util']).toBeDefined();
      expect(packageJson.dependencies['yoyo-ng-module/acl']).toBeDefined();
      expect(packageJson.dependencies['yoyo-ng-module/auth']).toBeDefined();
      expect(packageJson.dependencies['yoyo-ng-module/cache']).toBeDefined();
      expect(packageJson.dependencies['yoyo-ng-module/mock']).toBeDefined();
    });
  });

  describe('#i18n', () => {
    describe('with true', () => {
      beforeEach(() => ({ runner, tree } = createAlainApp({ i18n: true })));
      it(`can add i18n related`, () => {
        const specTs = tree.readContent('/foo/src/testing/common.spec.ts');
        expect(specTs).toContain(`@core/i18n/`);
      });
    });
    describe('with false', () => {
      beforeEach(() => ({ runner, tree } = createAlainApp({ i18n: false })));
      it(`can't add i18n related`, () => {
        const specTs = tree.readContent('/foo/src/testing/common.spec.ts');
        expect(specTs).not.toContain(`@core/i18n/`);
      });
    });
  });
});
