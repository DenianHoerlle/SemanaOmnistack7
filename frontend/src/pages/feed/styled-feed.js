import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PostList = styled.section`
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const PostWrapper = styled.article`
  background: #ddd;
  border: 1px solid #ddd;
  margin-top: 30px;
`;

export const PostHeader = styled.header`
  padding: 20px;

  display: flex;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserLabel = styled.span`
  font-size: 13px;
`;

export const PlaceLabel = styled.span`
  font-size: 11px;
  color: #666;
  margin-top: 3px;
`;

export const PostImage = styled.img`
  width: 100%;
`;

export const PostFooter = styled.footer`
  padding: 20px;
`;

export const Actions = styled.div`
  margin-bottom: 10px;
`;

export const Icon = styled.img`
  ${({ height }) => height && `height: ${height}px;`}
  margin-right: 10px;
  cursor: pointer;
`;

export const PostDescription = styled.p`
  font-size: 13px;
  margin-top: 2px;
  line-height: 18px;
`;

export const PostHashTags = styled.span``;
