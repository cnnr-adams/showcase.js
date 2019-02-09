import { assert } from 'chai';
import showcase, { handleRepo, handleRepos } from '../src';

describe('Tests the main showcase function', () => {
  // it('Tests current repo for showcase.json', async () => {
  //   handleRepo({ name: "showcase.js", description: "test" }, "cnnr-adams")
  //     .catch(err => assert(true));
  // });
  it('Tests showcase fn', async () => {
    showcase("cnnr-adams").then(res => assert(true)).catch(err => assert(false, err));
  })
});
