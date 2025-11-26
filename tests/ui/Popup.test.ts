import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import Popup from '@/ui/Popup.vue';

describe('Popup.vue', () => {
  it('renders the title', () => {
    const wrapper = mount(Popup);
    expect(wrapper.text()).toContain('Recorder');
  });

  it('logs message when button is clicked', async () => {
    const consoleSpy = vi.spyOn(console, 'log');
    const wrapper = mount(Popup);
    await wrapper.find('button').trigger('click');
    expect(consoleSpy).toHaveBeenCalledWith('Start recording');
    consoleSpy.mockRestore();
  });
});
