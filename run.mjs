import { list, pythonSummary, repeat, selectors, stdout } from '@cairul/pdk/runner';

export default {
  command: ['python3', 'manage.py'],
  select: selectors({ labels: list, tags: list, excludeTags: list }),
  build({ labels, tags, excludeTags }) {
    return {
      args: ['test', ...repeat('--tag', tags), ...repeat('--exclude-tag', excludeTags), ...(labels ?? [])],
      capture: 'combined',
      read: stdout(pythonSummary),
    };
  },
};
