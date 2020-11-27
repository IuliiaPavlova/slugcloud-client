/* eslint-disable no-alert */
import { ChangeEvent, FunctionComponent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSlugRequest } from '../../store/actions';
import { SlugcloudState } from '../../store/init';
import { Slug } from '../../types';
import Button from '../button';

import css from './formwidget.module.scss';

const FormWidget: FunctionComponent = () => {
  const dispatch = useDispatch();
  const slugs: Slug[] = useSelector((store: SlugcloudState) => store.slugs);
  const [urlInput, setUrl] = useState('');
  const [slugInput, setSlug] = useState('');
  const handleSubmit = () => {
    dispatch(fetchSlugRequest(urlInput, slugInput));
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    switch (name) {
      case 'url':
        setUrl(value);
        return undefined;
      case 'slug':
        setSlug(value);
        return undefined;
      default:
        return undefined;
    }
  };

  return (
    <div className={css.formwidget}>
      <div className={css['formwidget-input-container']} sa-theme="liquid">
        <form onSubmit={handleSubmit}>
          <div className="form-row-inline">
            <input type="text" id="urlInputLanding" name="url" placeholder="Shorten a link here" value={urlInput} onChange={handleChange} />
            <input type="text" id="slugInputLanding" name="slug" placeholder="Provide slug here" value={slugInput} onChange={handleChange} />
            <Button
              priority="primary"
              label="Shorten It!"
              type="button"
              action={{
                type: 'action',
                cb: handleSubmit,
              }}
            />
          </div>
        </form>
      </div>
      {
        slugs.map(({ _id, url, slug }) => (
          <div className="tile" key={_id}>
            <div>{url}</div>
            <div>
              <a href={`http://localhost:3300/${slug}`} target="_blank" rel="noreferrer">
                {`http://localhost:3300/${slug}`}
              </a>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default FormWidget;
