import { defineCustomElement } from './custom-elements';

describe('custom-elements', () => {

  describe('defineCustomElement()', () => {

    test('should register the custom element when the tag is not in use', () => {
      const customElements = {
        get: () => false,
        define: jest.fn()
      };
      const customElementConstructor = class {};
      defineCustomElement('new-tag', customElementConstructor, customElements);
      expect(customElements.define).toBeCalledWith('new-tag', customElementConstructor);
    });

    test('should not register the custom element when the tag is already in use', () => {
      const customElements = {
        get: () => true,
        define: jest.fn()
      };
      const customElementConstructor = class {};
      defineCustomElement('new-tag', customElementConstructor, customElements);
      expect(customElements.define).not.toBeCalled();
    });

  });

});